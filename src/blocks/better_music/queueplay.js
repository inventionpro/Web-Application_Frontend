import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'better_play';
const blockData = {
  message0: 'Search and play %1',
  args0: [
    {
      type: 'input_value',
      name: 'SEARCH',
      check: Types.String
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const search = javascriptGenerator.valueToCode(block, 'SEARCH', javascriptGenerator.ORDER_ATOMIC);
  return `let song = await queue.play(${search}).catch(_ => {
  if(!guildQueue) queue.stop();
});`;
};
