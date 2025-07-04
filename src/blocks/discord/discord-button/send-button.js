import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_send_button';

const blockData = {
  message0: '%{BKY_SEND_BUTTON}',
  args0: [
    {
      type: 'input_value',
      name: 'BUTTON',
      check: ['ButtonRow', 'ButtonMenu']
    },
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['String', 'Number', 'MessageEmbed', 'embed']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
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
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  const button = JavaScript.valueToCode(block, 'BUTTON', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      if (contentType === 'MessageEmbed') {
        const code = `${channel}.send({${content},components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
        return code;
      } else {
        const code = `${channel}.send({${content},components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
        return code;
      }
    } else if (contentType === 'embed' || (!contentType && typeof contentType === 'object')) {
      const code = `${channel}.send({ embeds:[${content} ],
components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
      return code;
    } else {
      const code = `${channel}.send({ content: String(${content}),
components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
      return code;
    }
  } else {
    const code = `${channel}.send({ content: String(${content}),
components:[${button}]}).then(async m=>{
            ${statements}
        });\n`;
    return code;
  }
};
