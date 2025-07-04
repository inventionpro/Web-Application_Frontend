import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const info = block.getFieldValue('INFO');
  const code = [`sticker.${info}`, JavaScript.ORDER_NONE];
  return code;
};
