import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'ahq_ahq_modal';

const blockData = {
  message0: 'Send embeds %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: 'String'
    }
  ],
  output: 'ahq_type',
  colour: '#40BF4A'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const statementsThen = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const code = [`${statementsThen}`, javascriptGenerator.ORDER_NONE];
  return code;
};
