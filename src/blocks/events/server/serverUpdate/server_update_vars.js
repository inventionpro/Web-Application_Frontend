import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'server_update_vars';
const blockData = {
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['Old Server', 'OLD'],
        ['New Server', 'NEW']
      ]
    }
  ],
  output: Types.String,
  colour: '#52fc03',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'OLD') {
    return ['oldGuild', javascriptGenerator.ORDER_NONE];
  } else if (searchType === 'NEW') {
    return ['newGuild', javascriptGenerator.ORDER_NONE];
  }
};
