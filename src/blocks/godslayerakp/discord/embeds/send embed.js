import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'gsa_send_embed';
const blockData = {
  type: 'gsa_send_embed',
  message0: 'send embed %1 with message %2',
  args0: [
    {
      type: 'field_input',
      name: 'NAME'
    },
    {
      type: 'input_value',
      name: 'message',
      check: 'String'
    }
  ],
  output: 'MessageEmbed',
  inputsInline: true,
  colour: 120,
  tooltip: 'can be used to send the embed with the name',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  // const color = JavaScript.valueToCode(block, "title", JavaScript.ORDER_ATOMIC)
  let message = '';
  if (JavaScript.valueToCode(block, 'message', JavaScript.ORDER_ATOMIC) != null) {
    message = `content: String(${JavaScript.valueToCode(block, 'message', JavaScript.ORDER_ATOMIC)}), `;
  }
  const color = block.getFieldValue('NAME');
  return [`${message}embeds: [${color.replaceAll(' ', '_').replace(/[!@#\$%\^&\*\(\)-=\]\[\|{}\+`~'":;\?\/\.<>,\/]/g, '_')}]`, JavaScript.ORDER_ATOMIC];
};
