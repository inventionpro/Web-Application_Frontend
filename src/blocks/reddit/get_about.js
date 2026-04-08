import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'about_user';
const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['Profile Picture', 'icon_img'],
        ['Comment Karma', 'comment_karma'],
        ['Total Karma', 'total_karma'],
        ['Awarder Karma', 'awarder_karma'],
        ['Creation Date (UTC)', 'created_utc']
      ]
    }
  ],
  colour: '#5ba58b',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const stats = block.getFieldValue('INFO');
  return [`info.data.${stats}`, javascriptGenerator.ORDER_NONE];
};
