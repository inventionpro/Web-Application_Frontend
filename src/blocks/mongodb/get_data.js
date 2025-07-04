import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'mongo_get_data';

const blockData = {
  message0: '%{BKY_GET_DATA}',
  args0: [
    {
      type: 'input_value',
      name: 'KEY',
      check: ['String', 'Number']
    }
  ],
  output: null,
  colour: '#4fc99e',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  return [`(await(mdb.get(${key})))`, JavaScript.ORDER_ATOMIC];
};
