import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_menu_reply';

const blockData = {
  message0: '%{BKY_REPLY_MENU}',
  args0: [
    {
      type: 'input_value',
      name: 'REPLY',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'TRUEORFALSE',
      check: ['Boolean']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const tof = JavaScript.valueToCode(block, 'TRUEORFALSE', JavaScript.ORDER_ATOMIC);
  const reply = JavaScript.valueToCode(block, 'REPLY', JavaScript.ORDER_ATOMIC);
  const code = `await i.reply({content:${reply},ephemeral:${tof === null ? false : tof}})\n`;
  return code;
};
