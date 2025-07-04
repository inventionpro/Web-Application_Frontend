import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_slash_choices';

const blockData = {
  message0: 'Add choice %1 Show as %2 Return as option %3',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'OPTION_NAME',
      check: 'String'
    }
  ],
  colour: '#2e5b99',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const option_name = JavaScript.valueToCode(block, 'OPTION_NAME', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const code = `{
    name: String(${name.toLowerCase()}),
    value: String(${option_name})
},`;
  return code;
};
