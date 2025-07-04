import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_newline';

const blockData = {
  message0: '%{BKY_NEWLINE}',
  output: 'String',
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return ["'\\n'", JavaScript.ORDER_ATOMIC];
};
