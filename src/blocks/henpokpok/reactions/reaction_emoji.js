import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'react_emoji';
const blockData = {
  message0: 'Reacting emoji',
  colour: '#79F05C',
  tooltip: 'Emoji of the reaction',
  output: Types.String
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['reaction.emoji.name', javascriptGenerator.ORDER_NONE];
};
