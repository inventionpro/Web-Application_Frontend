import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'monaco_delete_guild';
const blockData = {
  message0: 'Delete server %1',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'Server',
      check: Types.Server
    }
  ],
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Deletes a server. Only works if the owner is the bot itself.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['monaco_delete_guild'] = (block) => {
  var value_server = javascriptGenerator.valueToCode(block, 'Server', javascriptGenerator.ORDER_ATOMIC);
  return `${value_server}.delete();`;
};
