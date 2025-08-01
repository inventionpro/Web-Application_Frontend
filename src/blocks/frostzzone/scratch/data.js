import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'scratch_about_user';

const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['User ID', 'id'],
        ['Username', 'username'],
        ['Member of the scratch team?', 'scratchteam'],
        ['Working on', 'profile.status'],
        ['About Me', 'profile.bio'],
        ['Country', 'profile.country']
      ]
    }
  ],
  colour: '#5ba58b',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const stats = block.getFieldValue('INFO');
  const code = [`(data.${stats})`, JavaScript.ORDER_NONE];

  return code;
};
