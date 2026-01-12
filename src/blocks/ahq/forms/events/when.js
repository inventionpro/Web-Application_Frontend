import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'on_real_form';

const blockData = {
  message0: 'When a Form is clicked %1 %2',
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
  const code = `s4d.client.on('modalSubmit', async (i) => {\nlet member = i.guild.members.cache.get(i.member.user.id)\n${statementsThen}\n});\n`;
  return code;
};
