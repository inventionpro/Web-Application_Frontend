import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_send_wait_reply_dm';

const blockData = {
  message0: '%{BKY_SEND_WAIT_REPLY_DM}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['MessageEmbed', 'String', 'Number', 'embed']
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
      code = ` ${member}.send({${content}}).then(msg =>{\n`;
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      code = `${member}.send({ embeds:[${content}]}).then(msg =>{\n\n`;
    } else {
      code = `${member}.send({content:String(${content})}).then(msg =>{\n`;
    }
  } else {
    code = `${member}.send({content:String(${content})}).then(msg =>{\n`;
  }
  code += `msg.channel.awaitMessages(response => response.content, { time: (${time}*60*1000), max: 1,errors: ['time'] }).then(async (collected) => { s4d.reply = collected.first().content; \n ${statementThen} \n s4d.reply = null; }).catch(async (e) => { console.error(e); ${statementCatch} })\n});\n`;
  return code;
};
