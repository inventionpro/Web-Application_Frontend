import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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
      check: ['Category', 'Channel']
    }
  ],
  output: ['String', 'Number'],
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var extention = block.getFieldValue('type');
  var code = JavaScript.valueToCode(block, 'CATEGORY', JavaScript.ORDER_ATOMIC);

  return [`${code}.${extention}`, JavaScript.ORDER_NONE];
};
