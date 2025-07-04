import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'fz_get_all_emoj';

const blockData = {
  message0: 'created emoji/cached emoji',
  args0: [],
  colour: '#187795',
  output: 'Emoji',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return [`emoj`, JavaScript.ORDER_NONE];
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_ALL_EMOJI_PARENT',
    types: ['fz_get_all_emoji']
  }
]);
