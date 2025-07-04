import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'qdb_get';

const blockData = {
  message0: 'Get the value %1 from the SQLite DB',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  output: null,
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
  return [`await qdb.get(${key})\n`, JavaScript.ORDER_ATOMIC];
};
