import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_object_getvalue';
// "colour": "#cc59e3",
const blockData = {
  message0: 'get value %1 from object %2',
  inputsInline: true,
  colour: '#BA4A9A',
  args0: [
    {
      type: 'input_value',
      name: 'value',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'object',
      check: ['Object', null]
    }
  ],
  output: null,
  tooltip: 'A value of an object.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_ATOMIC);
  const object = javascriptGenerator.valueToCode(block, 'object', javascriptGenerator.ORDER_ATOMIC);
  const code = [`${object}[String(${value})]`, javascriptGenerator.ORDER_NONE];
  return code;
};
