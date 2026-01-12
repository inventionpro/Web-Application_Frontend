import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_wait_react_emoji_id';

const blockData = {
  message0: '%{BKY_WAIT_REACT_EMOJI_ID}',
  colour: '#5BA58C',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = ['s4dreaction.emoji.id', javascriptGenerator.ORDER_NONE];
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_REACT_EMOJI_ID_PARENT',
    types: ['s4d_reaction_wait_added_reaction']
  }
]);
