import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_web_foreachkey';

const blockData = {
  message0: 'get all keys then for each %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: 240,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Runs the blocks every time a key is found in the data file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  let code = `Object.keys(JSONdataS4D).forEach(async s4dkey => {
${statementThen}
});`;
  return code;
};
