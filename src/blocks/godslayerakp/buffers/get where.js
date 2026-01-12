import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_buffer_index_of_string_number_or_buffer';

const blockData = {
  message0: 'the index of %2 in buffer %1',
  args0: [
    {
      type: 'input_value',
      name: 'buffer',
      check: 'buffer'
    },
    {
      type: 'input_value',
      name: 'index',
      check: ['buffer', 'String', 'Number']
    }
  ],
  output: 'Number',
  colour: '#AE4FA7',
  tooltip: 'gets where something is in a buffer',
  helpUrl: 'https://nodejs.org/api/buffer.html#bufincludesvalue-byteoffset-encoding'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setInputsInline(true);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const buf = javascriptGenerator.valueToCode(block, 'buffer', javascriptGenerator.ORDER_ATOMIC);
  const idx = javascriptGenerator.valueToCode(block, 'index', javascriptGenerator.ORDER_ATOMIC);
  return [`${buf}.includes(${idx})`, javascriptGenerator.ORDER_ATOMIC];
};
