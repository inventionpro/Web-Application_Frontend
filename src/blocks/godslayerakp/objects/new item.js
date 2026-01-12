import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_new_object_item_creator_empty_search_moment_searchMoment';
const blockData = {
  type: 'gsa_send_embed',
  message0: 'add %1 with value %2',
  args0: [
    {
      type: 'field_input',
      name: 'name'
    },
    {
      type: 'input_value',
      name: 'value'
    }
  ],
  previousStatement: 'object',
  nextStatement: 'object',
  inputsInline: true,
  colour: '#BA4A9A',
  tooltip: 'used in "create new object with" block to add items to it',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_ATOMIC);
  const color = block.getFieldValue('name');
  return `"${color}": ${message},`;
};
