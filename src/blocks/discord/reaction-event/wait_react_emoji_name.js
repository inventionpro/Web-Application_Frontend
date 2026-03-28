import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_wait_react_emoji_name';
const blockData = {
  message0: '%{BKY_WAIT_REACT_EMOJI_NAME}',
  colour: '#5BA58C',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dreaction.emoji.name', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_REACT_EMOJI_ID_PARENT',
    types: ['s4d_reaction_wait_added_reaction']
  }
]);
