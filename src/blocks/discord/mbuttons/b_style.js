import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'b_style';

const blockData = {
  message0: '%{BKY_B_STYLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SEARCH_TYPE',
      options: [
        ['Blurple', "'PRIMARY'"],
        ['Grey', "'SECONDARY'"],
        ['Green', "'SUCCESS'"],
        ['Red', "'DANGER'"],
        ['Link', "'LINK'"]
      ]
    }
  ],
  output: 'bstyle',
  colour: '#4C97FF',
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
  const code = [`${searchType}`, JavaScript.ORDER_NONE];
  return code;
};
