import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_delete_role';

const blockData = {
  message0: 'delete role %1 with reason %2 in server %3',
  args0: [
    {
      type: 'input_value',
      name: 'role',
      check: 'Role'
    },
    {
      type: 'input_value',
      name: 'reason',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: 'Deletes a role with a reason.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var value_role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  var value_reason = JavaScript.valueToCode(block, 'reason', JavaScript.ORDER_ATOMIC);
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.roles.delete(${value_role}, String(${value_reason}))\n`;
  return code;
};
