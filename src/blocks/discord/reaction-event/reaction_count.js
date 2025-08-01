import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_react_count';

const blockData = {
  message0: '%{BKY_REACT_COUNT}',
  colour: '#5BA58C',
  output: 'Number'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = ['reaction.count', JavaScript.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_REACT',
    types: ['s4d_on_react_added', 's4d_on_react_removed']
  }
]);
