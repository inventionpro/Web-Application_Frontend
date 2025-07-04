import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_bot_shutdown';

const blockData = {
  message0: 'Shutdown the bot',
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Litterally shutdowns the bot',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = `s4d.client.destroy();\n`;
  return code;
};
