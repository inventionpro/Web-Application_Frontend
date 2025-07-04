import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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
  output: 'String',
  colour: '#52fc03',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'OLD') {
    const code = ['oldGuild', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'NEW') {
    const code = ['newGuild', JavaScript.ORDER_NONE];
    return code;
  }
};
