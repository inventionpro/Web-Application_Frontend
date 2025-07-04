import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'inv_collapse_code';

const blockData = {
  message0: 'Collapse block %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'NAME'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#deb40d',
  tooltip: "Block that makes it easy to collapse multiple block that you can't collapse at the same time",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  return JavaScript.statementToCode(block, 'NAME');
};
