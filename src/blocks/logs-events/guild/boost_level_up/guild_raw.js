import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'event-guild';

const blockData = {
  message0: '%1 of guild',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['%{BKY_NAME}', 'NAME'],
        ['id', 'ID']
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
  const searchType = block.getFieldValue('SEARCH_TYPE');
  if (searchType === 'ID') {
    const code = ['guild.id', JavaScript.ORDER_NONE];
    return code;
  } else if (searchType === 'NAME') {
    const code = ['guild.name', JavaScript.ORDER_NONE];
    return code;
  }
};
