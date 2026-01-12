import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_buffer_set_from_index';

const blockData = {
  message0: 'in buffer %1 set # %2 to %3',
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
    },
    {
      type: 'input_value',
      name: 'value',
      check: 'Number'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#AE4FA7',
  tooltip: 'sets any byte at a specified index from a buffer',
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
  const idx = javascriptGenerator.valueToCode(block, 'index', javascriptGenerator.ORDER_ATOMIC);
  const val = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_ATOMIC);
  return `${buf}[Number(${idx}) - 1] = Number(${val})`;
};
