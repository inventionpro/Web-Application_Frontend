import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_encode_hash';

const blockData = {
  message0: 'hash text %1 %2 times',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'encode',
      check: ['String', 'var', 'Env']
    },
    {
      type: 'input_value',
      name: 'rounds',
      check: ['Number', 'var', 'Env']
    }
  ],
  colour: 195,
  output: 'String',
  tooltip: 'Hash text with a certain amount of rounds. The more rounds, the better but also slower. Can use Strings, Variables, and Env secrets for the input, and Numbers, Variables, and Env secrets for the amount of rounds.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'encode', javascriptGenerator.ORDER_ATOMIC);
  const rounds = javascriptGenerator.valueToCode(block, 'rounds', javascriptGenerator.ORDER_ATOMIC);
  return [`bcrypt.hashSync(${text}, ${rounds})`, javascriptGenerator.ORDER_NONE];
};
