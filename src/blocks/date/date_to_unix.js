import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'date_to_unix';

const blockData = {
  message0: 'date %1 to unix',
  args0: [
    {
      type: 'input_value',
      name: 'DATE',
      check: ['Number', 'Date']
    }
  ],
  output: 'Number',
  colour: '#D14081',
  tooltip: 'Convert a date to a UNIX timestamp.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const date = JavaScript.valueToCode(block, 'DATE', JavaScript.ORDER_ATOMIC);
  let code = [`Math.floor(${date}.getTime()/1000)`, JavaScript.ORDER_NONE];
  return code;
};
