import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_reg_new_options';

const blockData = {
  message0: 'Add option',
  args0: [],
  colour: '#33cc00',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = `,\n`;
  return code;
};
