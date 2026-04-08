import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'ed_name';
const blockData = {
  message0: '%1 of deleted emoji ',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['name', 'name'],
        ['ID', 'id'],
        ['author', 'author'],
        ['animated', 'animated'],
        ['available', 'available'],
        ['deletable', 'deletable'],
        ['deleted', 'deleted'],
        ['url', 'url']
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
  return [`emoji.${info}`, javascriptGenerator.ORDER_NONE];
};
