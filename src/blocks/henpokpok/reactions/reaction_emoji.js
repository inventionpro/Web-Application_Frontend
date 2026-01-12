import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'react_emoji';

const blockData = {
  message0: 'Reacting emoji',
  colour: '#79F05C',
  tooltip: 'Emoji of the reaction',
  output: 'String'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['reaction.emoji.name', javascriptGenerator.ORDER_NONE];
  return code;
};
