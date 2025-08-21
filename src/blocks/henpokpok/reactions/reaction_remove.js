import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'reaction_removed';

const blockData = {
  message0: 'When someone remove reaction %1 %2',
  colour: '#F5AB1A',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ]
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const statementsThen = JavaScript.statementToCode(block, 'STATEMENTS', JavaScript.ORDER_NONE);
  const code = `s4d.client.on(Discord.Events.MessageReactionRemove, async (reaction, user) => {${statementsThen}})`;
  return code;
};
