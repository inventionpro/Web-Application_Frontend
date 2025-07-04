import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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
JavaScript[blockName] = function () {
  const code = [`(ahqhandler[\`nsfw\`])`, JavaScript.ORDER_NONE];
  return code;
};
