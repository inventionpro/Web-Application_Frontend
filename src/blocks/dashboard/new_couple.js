import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript['new_couple'] = function (block) {
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var value_id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `[${value_id}, ${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.ORDER_NONE];
};
