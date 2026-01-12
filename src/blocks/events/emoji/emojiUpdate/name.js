import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'eu_name';

const blockData = {
  message0: '%2 of %1 ',
  args0: [
    {
      type: 'field_dropdown',
      name: 'ROLE',
      options: [
        ['new emoji', 'newEmoji'],
        ['old emoji', 'oldEmoji']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['name', 'name'],
        ['ID', 'id'],
        ['animated', 'animated'],
        ['author', 'author'],
        ['available', 'available'],
        ['deletable', 'deletable'],
        ['deleted', 'deleted'],
        ['url', 'url']
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
  const emoji = block.getFieldValue('ROLE');
  const code = [`${emoji}.${info}`, javascriptGenerator.ORDER_NONE];
  return code;
};
