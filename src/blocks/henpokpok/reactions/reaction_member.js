import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'react_member';

const blockData = {
  message0: 'Reacting member',
  colour: '#F0C55C',
  tooltip: 'react,remove reaction',
  output: 'Member'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['user', JavaScript.ORDER_NONE];
  return code;
};
