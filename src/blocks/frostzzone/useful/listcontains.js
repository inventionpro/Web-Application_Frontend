import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'list_contains';
const blockData = {
  message0: 'list %1 contains %2',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'LIST',
      check: Types.Array
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.Any
    }
  ],
  output: Types.Boolean,
  colour: '%{BKY_LISTS_HUE}',
  inline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_list = javascriptGenerator.valueToCode(block, 'LIST', javascriptGenerator.ORDER_ATOMIC);
  var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);

  return [`${value_list}.includes(${value_name})`, javascriptGenerator.ORDER_NONE];
};
