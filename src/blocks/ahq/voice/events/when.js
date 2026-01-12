import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'voice_event';

const blockData = {
  message0: 'When a member joins a voice channel %1 %2',
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
  const code = `s4d.client.on('voiceStateUpdate', async (oldState, newState) => {
        if (!(oldState.channel)) {
        ${statementsThen}
        }
    });\n`;
  return code;
};
