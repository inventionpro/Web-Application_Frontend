import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'cc_name';
const blockData = {
  message0: '%1 of created channel ',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['name', 'name'],
        ['ID', 'id'],
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
  return [`channel.${info}`, javascriptGenerator.ORDER_NONE];
};
