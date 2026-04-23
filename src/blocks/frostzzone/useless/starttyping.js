import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'frost_typing';
const blockData = {
  message0: 'Start typing in channel for (seconds) %1 then send %2',
  args0: [
    {
      type: 'input_value',
      name: 'time',
      check: Types.Number
    },
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const time = javascriptGenerator.valueToCode(block, 'time', javascriptGenerator.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType))
      return `s4dmessage.channel.sendTyping();
await delay(Number(${time}) * 1000);
s4dmessage.channel.send(${content});`;
  }
  return `s4dmessage.channel.sendTyping();
await delay(Number(${time}) * 1000);
s4dmessage.channel.send({ content: String(${content}) });`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_MESSAGE',
    types: ['s4d_on_message']
  }
]);
