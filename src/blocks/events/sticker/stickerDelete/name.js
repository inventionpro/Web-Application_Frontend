import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'sd_name';

const blockData = {
  message0: '%1 of deleted sticker ',
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
  output: 'String',
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
  const code = [`sticker.${info}`, javascriptGenerator.ORDER_NONE];
  return code;
};
