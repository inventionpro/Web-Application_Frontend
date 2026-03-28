import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_add_server_id';
const blockData = {
  message0: '%{BKY_ADD_SERVER_ID}',
  colour: '#5BA58C',
  tooltip: '',
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dguild.id', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_ADDED',
    types: ['s4d_on_added', 's4d_on_remove']
  }
]);
