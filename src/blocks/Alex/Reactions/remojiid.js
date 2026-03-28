import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'reaction_emoji_id';
const blockData = {
  message0: 'Reaction emoji ID',
  colour: '#5BA58C',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['reaction.emojiId', javascriptGenerator.ORDER_NONE];
};
