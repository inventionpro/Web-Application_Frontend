import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

const blockName = 'frost_category_id';
const blockData = {
  message0: 'Get the %1 of Category/Channel %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['ID', 'id'],
        ['Name', 'name'],
        ['Position', 'position'],
        ['Guild', 'guild'],
        ['Guild ID', 'guild.id']
      ]
    },
    {
      type: 'input_value',
      name: 'CATEGORY',
      check: Types.Channel
    }
  ],
  output: T(Types.String, Types.Number),
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var extention = block.getFieldValue('type');
  var code = javascriptGenerator.valueToCode(block, 'CATEGORY', javascriptGenerator.ORDER_ATOMIC);
  return [`${code}.${extention}`, javascriptGenerator.ORDER_NONE];
};
