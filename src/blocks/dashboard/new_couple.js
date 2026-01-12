import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'new_couple';

const blockData = {
  type: 'new_couple',
  message0: 'Create a new item for the list %1 Name (will be displayed) %2 ID (value that will be sent) %3',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME'
    },
    {
      type: 'input_value',
      name: 'ID'
    }
  ],
  output: null,
  colour: 245,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['new_couple'] = (block) => {
  var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  var value_id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  var code = `[${value_id}, ${value_name}]`;
  return [code, javascriptGenerator.ORDER_NONE];
};
