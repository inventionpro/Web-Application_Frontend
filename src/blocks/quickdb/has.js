import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'qdb_has_data';

const blockData = {
  message0: '%1 Exist in SQLite DB?',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  output: 'Boolean',
  colour: '#5ba58b',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  return ['qdb.has(String(' + key + '))', JavaScript.ORDER_ATOMIC];
};
