import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH_TYPE');
  const code = [`${searchType}`, javascriptGenerator.ORDER_NONE];
  return code;
};
