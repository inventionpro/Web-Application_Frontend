import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_load_env';
const blockData = {
  message0: 'Load .env file from %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  colour: '#3333ff',
  tooltip: 'Loads a .env file to be used for process.env block',
  helpUrl: 'https://nodejs.org/api/environment_variables.html'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let value_file = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return `process.loadEnvFile(${value_file});`;
};
