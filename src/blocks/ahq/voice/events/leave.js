import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'voice_leave';

const blockData = {
  message0: 'When a member leaves a voice channel %1 %2',
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
  const code = `s4d.client.on(Discord.Events.VoiceStateUpdate, async (oldState, newState) => {
        if (!(newState.channel)) {
        ${statementsThen}
        }
    });\n`;
  return code;
};
