import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const date = javascriptGenerator.valueToCode(block, 'DATE', javascriptGenerator.ORDER_ATOMIC);
  let code = [`Math.floor(${date}.getTime()/1000)`, javascriptGenerator.ORDER_NONE];
  return code;
};
