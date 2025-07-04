import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_member_exist';

const blockData = {
  message0: 'member %1 exist?',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    }
  ],
  output: 'Boolean',
  colour: '#4C97FF',
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
  const code = [`typeof ${member} !== undefined`, JavaScript.ORDER_NONE];
  return code;
};
