import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'typing_start';
const blockData = {
  message0: 'When someone starts typing %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#f79400',
  tooltip: 'The blocks inside will run whenever someone starts to type.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  return `s4d.client.on(Discord.Events.TypingStart, async (s4dTyping) => {
${then}
});`;
};
