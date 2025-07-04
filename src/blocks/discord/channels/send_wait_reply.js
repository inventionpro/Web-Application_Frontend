import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_send_wait_reply';

const blockData = {
  message0: '%{BKY_SEND_WAIT_REPLY}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['MessageEmbed', 'String', 'Number', 'embed']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    },
    {
      type: 'input_value',
      name: 'TIME',
      check: 'Number'
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

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  const memberr = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  let member = memberr.replace('.user', '');
  const time = JavaScript.valueToCode(block, 'TIME', JavaScript.ORDER_ATOMIC) || 5;
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const statementCatch = JavaScript.statementToCode(block, 'CATCH');
  let code = '';
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      code = `${channel}.send({${content}})`;
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      code = `${channel}.send({ embeds:[${content}]})`;
    } else {
      code = `${channel}.send(String(${content}))`;
    }
  } else {
    code = `${channel}.send(String(${content}))`;
  }
  code += `.then(() => { ${channel}.awaitMessages({filter:(m) => m.author.id === ${member}.id,  time: (${time}*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;\n s4d.message = collected.first();  \n ${statementThen} \n s4d.reply = null; }).catch(async (e) => { console.error(e); ${statementCatch} });\n})\n`;
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
