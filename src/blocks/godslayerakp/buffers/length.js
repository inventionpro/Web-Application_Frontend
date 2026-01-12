import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_buffer_get_length';

const blockData = {
  message0: 'length of %1',
  args0: [
    {
      type: 'input_value',
      name: 'buffer',
      check: 'buffer'
    }
  ],
  output: 'Number',
  colour: '#AE4FA7',
  tooltip: 'gets the length of a buffer',
  helpUrl: 'https://nodejs.org/api/buffer.html#bufindex'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setInputsInline(true);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const buf = javascriptGenerator.valueToCode(block, 'buffer', javascriptGenerator.ORDER_ATOMIC);
  return [`${buf}.length`, javascriptGenerator.ORDER_ATOMIC];
};
