import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 's4d_send_in_channel';

const blockData = {
  message0: 'send %1 in channel %2  as a %3 reply with goodbye/welcome/rankcard %4',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'field_grid_dropdown',
      name: 'INTERACTION',
      options: [
        ['message', 'message'],
        ['interaction', 'interaction']
      ]
    },
    {
      type: 'input_value',
      name: 'GW',
      check: ['Goodbye', 'Welcome', 'Rankcard']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  const gw = JavaScript.valueToCode(block, 'GW', JavaScript.ORDER_ATOMIC);
  const info2 = block.getFieldValue('INTERACTION');
  let info1 = info2.replace("'", '');
  let info = info1.replace("'", '');
  let code;
  if (info === 'interaction') {
    code = `interaction.reply({content:${content},files:[{attachment:${gw}.toBuffer()}]});\n`;
  } else {
    code = `${channel}.send({content:${content},files:[{attachment:${gw}.toBuffer()}]});\n`;
  }
  return code;
};
