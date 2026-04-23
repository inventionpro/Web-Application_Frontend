import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'monaco_all_invites';
const blockData = {
  type: 'monaco_all_invites',
  message0: 'all invites in server %1',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    }
  ],
  colour: '#4C97FF',
  output: Types.Invite,
  inputsInline: true,
  tooltip: 'Get all invites created.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_all_invites'] = (block) => {
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  return [`${value_server}.invites.fetch()`, javascriptGenerator.ORDER_NONE];
};
