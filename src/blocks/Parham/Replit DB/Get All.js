import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'parham_replitdb_getall';

const blockData = {
  message0: 'Get all data from Replit DB %1 then %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'then'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#09499e',
  tooltip: 'Get All Items From Replit DB\nOutputs A List I Guess',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var statements_then = javascriptGenerator.statementToCode(block, 'then');
  var code = `S4D_APP_Replit_DB.list().then(async (S4D_APP_Replit_DB_Data) => {${statements_then}});;\n`;
  return code;
};
