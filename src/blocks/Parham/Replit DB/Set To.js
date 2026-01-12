import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'parham_replitdb_setto';

const blockData = {
  message0: 'Set %1 to %2 in Replit DB %3 then %4',
  args0: [
    {
      type: 'input_value',
      name: 'set',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'to'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'then'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#09499e',
  tooltip: 'Set Something To Something In Replit DB',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_set = javascriptGenerator.valueToCode(block, 'set', javascriptGenerator.ORDER_ATOMIC);
  var value_to = javascriptGenerator.valueToCode(block, 'to', javascriptGenerator.ORDER_ATOMIC);
  var statements_then = javascriptGenerator.statementToCode(block, 'then');
  var code = `S4D_APP_Replit_DB.set(${value_set}, ${value_to}).then(async () => {${statements_then}});\n`;
  return code;
};
