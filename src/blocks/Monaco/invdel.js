import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock['monaco_delete_invite'] = (block) => {
  var value_invite = javascriptGenerator.valueToCode(block, 'invite', javascriptGenerator.ORDER_ATOMIC);
  var value_reason = javascriptGenerator.valueToCode(block, 'reason', javascriptGenerator.ORDER_ATOMIC);
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_server}.invites.delete(${value_invite}, String(${value_reason}))\n`;
  return code;
};
