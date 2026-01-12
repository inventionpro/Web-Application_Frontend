import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'frost_env';
const blockData = {
  message0: 'process.env.%1',
  colour: '#3333ff',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: 'String'
    }
  ],
  tooltip: null,
  output: ['String', 'Env'],
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
  const code = [`process.env[String(${value})]`, javascriptGenerator.ORDER_NONE];
  return code;
};
