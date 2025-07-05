import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_members_with_role';

const blockData = {
  type: 'monaco_members_with_role',
  message0: 'get all members with role %1',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      check: 'Role'
    }
  ],
  colour: '#4C97FF',
  output: 'Members',
  inputsInline: true,
  tooltip: 'Get all members with role',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_members_with_role'] = function (block) {
  var value_role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  var code = `${value_role}.members`;
  return [code, JavaScript.ORDER_NONE];
};
