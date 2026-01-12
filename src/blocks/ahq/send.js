import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'snd_ahq';

const blockData = {
  message0: 'Send %1 %2 channel %3',
  args0: [
    {
      type: 'input_value',
      name: 'value',
      check: 'String'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'ch',
      check: 'ahqfind'
    }
  ],
  colour: '#3366ff',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_NONE);
  const ch = javascriptGenerator.valueToCode(block, 'ch', javascriptGenerator.ORDER_NONE);
  const code = `${ch}.send({
        content: String(${value})
    });`;
  return code;
};
