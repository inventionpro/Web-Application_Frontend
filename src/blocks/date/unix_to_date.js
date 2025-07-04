import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'unix_to_date';

const blockData = {
  message0: 'unix %1 to date',
  args0: [
    {
      type: 'input_value',
      name: 'UNIX',
      check: 'Number'
    }
  ],
  output: 'Number',
  colour: '#D14081',
  tooltip: 'Convert a UNIX timestamp to a date.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const unix = JavaScript.valueToCode(block, 'UNIX', JavaScript.ORDER_ATOMIC);
  let code = [`new Date(${unix} * 1000)`, JavaScript.ORDER_NONE];
  return code;
};
