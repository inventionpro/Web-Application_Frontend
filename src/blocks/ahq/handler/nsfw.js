import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'nsfw_ahq_hndler';

const blockData = {
  message0: 'NSFW Channel Warning message',
  args0: [],
  colour: '#33cc00',
  output: 'String',
  tooltip: '???',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = function () {
  const code = [`(ahqhandler[\`nsfw\`])`, javascriptGenerator.ORDER_NONE];
  return code;
};
