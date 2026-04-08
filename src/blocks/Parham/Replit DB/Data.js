import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'parham_replitdb_data';
const blockData = {
  message0: 'Data',
  output: Types.Any,
  colour: '#09499e',
  tooltip: 'Get Data',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`S4D_APP_Replit_DB_Data`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$You need to use a valid block that outputs a data first and put this block on then',
    types: ['parham_replitdb_get', 'parham_replitdb_getall']
  }
]);
