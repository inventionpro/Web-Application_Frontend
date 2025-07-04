import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

import { registerRestrictions } from '../../../restrictions';

const blockName = 'parham_replitdb_data';

const blockData = {
  message0: 'Data',
  output: null,
  colour: '#09499e',
  tooltip: 'Get Data',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  // TODO: Assemble JavaScript into code variable.
  var code = `S4D_APP_Replit_DB_Data`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$You need to use a valid block that outputs a data first and put this block on then',
    types: ['parham_replitdb_get', 'parham_replitdb_getall']
  }
]);
