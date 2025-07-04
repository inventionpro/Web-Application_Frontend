import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const message = JavaScript.valueToCode(block, 'value', JavaScript.ORDER_ATOMIC);
  const color = block.getFieldValue('name');
  return `"${color}": ${message},`;
};
