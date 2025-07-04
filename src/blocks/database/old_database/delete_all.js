import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_delete_all_data';

const blockData = {
  message0: 'Delete all data from database',
  args0: [],
  previousStatement: null,
  nextStatement: null,
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = 's4d.database.clear()';
  return code;
};
