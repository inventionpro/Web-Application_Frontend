import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'reaction_added';

const blockData = {
  message0: 'When someone reacted %1 %2',
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
  const code = `s4d.client.on(Discord.Events.MessageReactionAdd, async (reaction, user) => {${statementsThen}})`;
  return code;
};
