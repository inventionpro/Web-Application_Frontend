import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'remove_reaction_of_user';
const blockData = {
  message0: 'In message %1 remove reaction with name %2 of user %3',
  args0: [
    {
      type: 'input_value',
      name: 'message',
      check: Types.Message
    },
    {
      type: 'input_value',
      name: 'reaction',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'user',
      check: Types.Member
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
  const message = javascriptGenerator.valueToCode(block, 'message', javascriptGenerator.ORDER_ATOMIC);
  const user = javascriptGenerator.valueToCode(block, 'user', javascriptGenerator.ORDER_ATOMIC);
  const reaction = javascriptGenerator.valueToCode(block, 'reaction', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.reactions.cache.find(reaction => reaction.emoji.name == ${reaction}).users.remove(${user}.id);`;
};
