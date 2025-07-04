import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_delete_invite';

const blockData = {
  message0: 'delete invite %1 with reason %2 in server %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'invite'
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
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Delete an invite.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_delete_invite'] = function (block) {
  var value_invite = JavaScript.valueToCode(block, 'invite', JavaScript.ORDER_ATOMIC);
  var value_reason = JavaScript.valueToCode(block, 'reason', JavaScript.ORDER_ATOMIC);
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.invites.delete(${value_invite}, String(${value_reason}))\n`;
  return code;
};
