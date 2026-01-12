import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_web_valueofkey';

const blockData = {
  message0: 'Value of key %1 in data file',
  args0: [
    {
      type: 'input_value',
      name: 'key',
      check: ['String', 'var', 'Env']
    }
  ],
  output: null,
  colour: 230,
  tooltip: 'Get the value of a key in a JSON file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  // stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
  const key = javascriptGenerator.valueToCode(block, 'key', javascriptGenerator.ORDER_ATOMIC);
  const code = [`JSONdataS4D[String(${key})]`, javascriptGenerator.ORDER_NONE];
  return code;
};
