import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'c_options';

const blockData = {
  message0: 'Get %1 option',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH',
      options: [
        ['message', "interaction.options.getMessage('message')"],
        ['user', 'interaction.targetUser'],
        ['member', 'interaction.targetMember']
      ]
    }
  ],
  colour: '#4C97FF',
  output: ['Message', 'Member', 'User'],
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const searchType = block.getFieldValue('SEARCH');
  return [`${searchType}`, JavaScript.ORDER_NONE];
};
