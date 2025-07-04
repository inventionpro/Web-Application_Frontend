import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'setbot';

const blockData = {
  message0: 'Set bot %1 to %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'wt',
      options: [
        ['Username', 'setUsername'],
        ['Avatar', 'setAvatar']
      ]
    },
    {
      type: 'input_value',
      name: 'set',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#0c97f0',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const wt = block.getFieldValue('wt');
  const set = JavaScript.valueToCode(block, 'set', JavaScript.ORDER_ATOMIC);
  const code = `s4d.client.user.${wt}(${set})`;
  return code;
};
