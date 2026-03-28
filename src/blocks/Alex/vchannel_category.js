import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'vcategory_channel';
const blockData = {
  message0: 'Create voice channel with name %1 In category with ID %2 In server %3',
  args0: [
    {
      type: 'input_value',
      name: 'name',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'id',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    }
  ],
  colour: '#0c97f0',
  tooltip: '',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const cid = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  return `${server}.channels.create(${name}, { type: 'GUILD_VOICE', parent: ${cid} });`;
};
