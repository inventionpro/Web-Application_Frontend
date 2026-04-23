import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_send_wait_reply';
const blockData = {
  message0: '%{BKY_SEND_WAIT_REPLY}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'MEMBER',
      check: Types.Member
    },
    {
      type: 'input_value',
      name: 'TIME',
      check: Types.Number
    },
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_statement',
      name: 'CATCH'
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
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const memberr = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  let member = memberr.replace('.user', '');
  const time = javascriptGenerator.valueToCode(block, 'TIME', javascriptGenerator.ORDER_ATOMIC) || 5;
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  const statementCatch = javascriptGenerator.statementToCode(block, 'CATCH');
  let code = '';
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType)) {
      code = `${channel}.send(${content})`;
    } else {
      code = `${channel}.send(String(${content}))`;
    }
  } else {
    code = `${channel}.send(String(${content}))`;
  }
  code += `.then(() => {
  ${channel}.awaitMessages({
  filter: (m) => m.author.id === ${member}.id,
  time: (${time}*60*1000),
  max: 1
}).then(async (collected) => {
  s4d.reply = collected.first().content;
  s4d.message = collected.first();
${statementThen}
  s4d.reply = null;
}).catch(async (e) => {
  console.error(e);
${statementCatch}
  });
});`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CONTENT',
    types: ['CONTENT']
  },
  {
    type: 'notempty',
    message: 'RES_SEND_CHANNEL_CHANNEL',
    types: ['CHANNEL']
  }
]);
