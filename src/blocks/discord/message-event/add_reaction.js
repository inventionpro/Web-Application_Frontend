import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_add_reaction';
const blockData = {
  message0: 'add reaction %1 to the received message',
  args0: [
    {
      type: 'input_value',
      name: 'REACTION',
      check: Types.String
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const reaction = javascriptGenerator.valueToCode(block, 'REACTION', javascriptGenerator.ORDER_ATOMIC);
  return `s4dmessage.react(${reaction});`;
};
