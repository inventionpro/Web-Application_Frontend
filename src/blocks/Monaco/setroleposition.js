import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'monaco_set_role_position';

const blockData = {
  message0: 'in server %1 set role %2 to position # %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'role',
      check: 'Role'
    },
    {
      type: 'input_value',
      name: 'position',
      check: 'Number'
    }
  ],
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Set a role to a specific position.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_set_role_position'] = function (block) {
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  var value_role = JavaScript.valueToCode(block, 'role', JavaScript.ORDER_ATOMIC);
  var value_position = JavaScript.valueToCode(block, 'position', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.${value_role}.setPosition(${value_position})\n`;
  return code;
};
