import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'parham_other_nocode';

const blockData = {
  message0: 'No Code %1 : %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'code'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#D14081',
  tooltip: 'The Blocks You Put On This Block Will Not Exported In Code',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  var code = '';
  return code;
};
