import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'reaction_emoji_id';

const blockData = {
  message0: 'Reaction emoji ID',
  colour: '#5BA58C',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['reaction.emojiId', javascriptGenerator.ORDER_NONE];
  return code;
};
