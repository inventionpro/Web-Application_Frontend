import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'gsa_buffer_get_from_index';

const blockData = {
  message0: 'in buffer %1 get # %2',
  args0: [
    {
      type: 'input_value',
      name: 'buffer',
      check: 'buffer'
    },
    {
      type: 'input_value',
      name: 'index',
      check: 'Number'
    }
  ],
  output: 'Number',
  colour: '#AE4FA7',
  tooltip: 'gets any byte at a specified index from a buffer',
  helpUrl: 'https://nodejs.org/api/buffer.html#bufindex'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setInputsInline(true);
  }
};

JavaScript[blockName] = function (block) {
  const buf = JavaScript.valueToCode(block, 'buffer', JavaScript.ORDER_ATOMIC);
  const idx = JavaScript.valueToCode(block, 'index', JavaScript.ORDER_ATOMIC);
  return [`${buf}[Number(${idx}) - 1]`, JavaScript.ORDER_ATOMIC];
};
