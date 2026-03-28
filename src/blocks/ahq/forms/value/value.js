import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'something_modal';
const blockData = {
  message0: 'Send forms %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: Types.String
    }
  ],
  output: 'ahq_modal_names',
  colour: '#40BF4A'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statementsThen = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  return [statementsThen, javascriptGenerator.ORDER_NONE];
};
