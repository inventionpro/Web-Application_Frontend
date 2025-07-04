import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const buf = JavaScript.valueToCode(block, 'buffer', JavaScript.ORDER_ATOMIC);
  const idx = JavaScript.valueToCode(block, 'index', JavaScript.ORDER_ATOMIC);
  const val = JavaScript.valueToCode(block, 'value', JavaScript.ORDER_ATOMIC);
  return `${buf}[Number(${idx}) - 1] = Number(${val})`;
};
