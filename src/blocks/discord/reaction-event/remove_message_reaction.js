import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_remove_reactions';
const blockData = {
  message0: 'remove all reactions on the message %1 with id/name %2',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: Types.Message
    },
    {
      type: 'input_value',
      name: 'EMOJI',
      check: Types.String
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  const id = javascriptGenerator.valueToCode(block, 'EMOJI', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.reactions.cache.get(${id}).remove();`;
};
