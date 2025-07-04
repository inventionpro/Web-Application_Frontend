import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'qdb_pull';

const blockData = {
  message0: 'Pull item %1 from the list %2 in SQLite db',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'DATA',
      check: ['String', 'Number']
    }
  ],
  nextStatement: null,
  previousStatement: null,
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
  const data = JavaScript.valueToCode(block, 'DATA', JavaScript.ORDER_ATOMIC);
  return `qdb.pull(String(${key}), ${data})\n`;
};
