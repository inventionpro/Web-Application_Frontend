import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_encode_checkhash';

const blockData = {
  message0: 'hash %1 equals text %2?',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'hash',
      check: ['String', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'test',
      check: ['String', 'var', 'Env']
    }
  ],
  colour: 195,
  output: 'Boolean',
  tooltip: 'Checks if the hash is equal to text that is not hashed. Can use Strings, Variables, and Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const hash = JavaScript.valueToCode(block, 'hash', JavaScript.ORDER_ATOMIC);
  const text = JavaScript.valueToCode(block, 'test', JavaScript.ORDER_ATOMIC);
  return [`bcrypt.compareSync(${text}, ${hash})`, JavaScript.ORDER_NONE];
};
