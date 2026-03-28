import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'style_ahq_modal';
const blockData = {
  message0: 'Text Box Style %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'Label',
      options: [
        ['Short Answer', "'SHORT'"],
        ['Paragraph', "'LONG'"]
      ]
    }
  ],
  output: 'ahq_style',
  colour: '#40BF4A'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statementsThen = block.getFieldValue('Label');
  return [statementsThen, javascriptGenerator.ORDER_NONE];
};
