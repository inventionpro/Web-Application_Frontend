import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_role_possition';

const blockData = {
  message0: '%{BKY_ROLE_POSSITION}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  output: 'Number',
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
  const role = JavaScript.valueToCode(block, 'ROLE', JavaScript.ORDER_ATOMIC);
  const code = [`${role}.position`, JavaScript.ORDER_NONE];
  return code;
};
