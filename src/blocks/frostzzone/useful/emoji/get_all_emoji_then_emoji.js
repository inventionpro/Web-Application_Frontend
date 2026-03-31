import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 'fz_get_all_emoj';
const blockData = {
  message0: 'created emoji/cached emoji',
  args0: [],
  colour: '#187795',
  output: Types.Emoji,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['emoj', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_ALL_EMOJI_PARENT',
    types: ['fz_get_all_emoji']
  }
]);
