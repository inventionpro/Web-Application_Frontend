import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_banana';

const blockData = {
  message0: 'banana block',
  args0: [],
  colour: '#ffcc00',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'go back to banana mode',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return `s4dmessage.channel.send('banana 🍌')`;
};
