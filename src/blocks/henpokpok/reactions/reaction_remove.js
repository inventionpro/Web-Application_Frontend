import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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
javascriptGenerator.forBlock[blockName] = (block) => {
  const statementsThen = javascriptGenerator.statementToCode(block, 'STATEMENTS', javascriptGenerator.ORDER_NONE);
  const code = `s4d.client.on("messageReactionRemove", async (reaction, user) => {${statementsThen}})`;
  return code;
};
