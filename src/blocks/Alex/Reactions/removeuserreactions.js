import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'remove_all_reactions_of_user';

const blockData = {
  message0: 'In message %1 remove all reactions of user %2',
  args0: [
    {
      type: 'input_value',
      name: 'message',
      check: 'Message'
    },
    {
      type: 'input_value',
      name: 'user',
      check: 'Member'
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

  const code = `${message}.reactions.cache.forEach(rr => rr.users.remove(${user}.id)); \n`;
  return code;
};
