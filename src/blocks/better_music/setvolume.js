import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'better_volume';
const blockData = {
  message0: 'Set volume to %1',
  args0: [
    {
      type: 'input_value',
      name: 'VOLUME',
      check: T(Types.String, Types.Number)
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
  const vol = javascriptGenerator.valueToCode(block, 'VOLUME', javascriptGenerator.ORDER_ATOMIC);
  return `guildQueue.setVolume(Number(${vol}));`;
};
