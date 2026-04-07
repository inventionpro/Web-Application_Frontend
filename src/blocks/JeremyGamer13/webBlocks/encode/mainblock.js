import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

const blockName = 'jg_encode_main';
const blockData = {
  message0: '%1 text %2 to type %3',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'type2',
      check: T(['encodedecodedropdowntype0216980', Types.String])
    },
    {
      type: 'input_value',
      name: 'encode',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'type',
      check: T(['encodedecodedropdowntype0216980', Types.String])
    }
  ],
  colour: 195,
  output: Types.String,
  tooltip: 'Encode/Decode text to a certain type. Can use Strings, Variables, and Env secrets.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const text = javascriptGenerator.valueToCode(block, 'encode', javascriptGenerator.ORDER_ATOMIC);
  const type = javascriptGenerator.valueToCode(block, 'type', javascriptGenerator.ORDER_ATOMIC);
  const typefrom = javascriptGenerator.valueToCode(block, 'type2', javascriptGenerator.ORDER_ATOMIC);
  return [`Buffer.from(${text}, ${typefrom}).toString(${type})`, javascriptGenerator.ORDER_NONE];
};
