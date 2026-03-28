import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

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
  output: T(Types.Message, Types.UserResolve),
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH');
  return [searchType, javascriptGenerator.ORDER_NONE];
};
