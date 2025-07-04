import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'banner-url';

const blockData = {
  message0: 'banner url',
  args0: [],
  output: 'String',
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['bannerURL', JavaScript.ORDER_NONE];
  return code;
};
