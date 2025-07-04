import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'gsa_buffer_includes_string_or_buffer';

const blockData = {
  message0: '%1 contains %2',
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
  output: 'Boolean',
  colour: '#AE4FA7',
  tooltip: 'checks if a buffer includes a buffer or string',
  helpUrl: 'https://nodejs.org/api/buffer.html#bufincludesvalue-byteoffset-encoding'
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
  return [`${buf}.includes(${idx})`, JavaScript.ORDER_ATOMIC];
};
