import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'on_slash';

const blockData = {
  message0: '%{BKY_S_ON}',
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
  const code = `s4d.client.on(Discord.Events.InteractionCreate, async (interaction) => {
        ${statements}
    });
    `;
  return code;
};
