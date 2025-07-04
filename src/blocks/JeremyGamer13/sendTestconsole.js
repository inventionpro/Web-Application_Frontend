import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_testblock';

const blockData = {
  message0: '%{BKY_JGPRINTTEST}',
  args0: [],
  colour: '#FFAA00',
  previousStatement: null,
  nextStatement: null,
  tooltip: "Sends test text to console, don't use this block.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return `console.log('Test block, it worked bro')\n`;
};
