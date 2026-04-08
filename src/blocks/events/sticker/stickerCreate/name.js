import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'sc_name';
const blockData = {
  message0: '%1 of created sticker ',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['name', 'name'],
        ['description', 'description'],
        ['ID', 'id'],
        ['author', 'user'],
        ['available', 'available'],
        ['url', 'url'],
        ['type', 'type'],
        ['tags', 'tags'],
        ['type', 'type']
      ]
    }
  ],
  output: Types.String,
  colour: '#5BA58C',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const info = block.getFieldValue('INFO');
  return [`sticker.${info}`, javascriptGenerator.ORDER_NONE];
};
