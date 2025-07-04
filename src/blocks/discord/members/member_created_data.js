import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_created_at';

const blockData = {
  message0: '%{BKY_CREATED_AT}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    }
  ],
  colour: '#187795',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const member = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  return [`moment(${member}.createdAt).format('LLLL')`, JavaScript.ORDER_NONE];
};
