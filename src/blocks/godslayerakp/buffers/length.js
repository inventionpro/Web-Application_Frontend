import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const buf = JavaScript.valueToCode(block, 'buffer', JavaScript.ORDER_ATOMIC);
  return [`${buf}.length`, JavaScript.ORDER_ATOMIC];
};
