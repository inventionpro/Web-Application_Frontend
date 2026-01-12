import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'on_boost';

const blockData = {
  message0: 'When member boost server %1 %2',
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
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  // guildMemberBoost is a discord-logs event
  const code = `s4d.client.on('guildMemberBoost', async (member) => {
  ${statements}
});\n`;
  return code;
};
