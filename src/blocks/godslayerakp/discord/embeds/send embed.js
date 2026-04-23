import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

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
      check: Types.String
    }
  ],
  output: Types.Embed,
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

javascriptGenerator.forBlock[blockName] = (block) => {
  let message = '';
  if (javascriptGenerator.valueToCode(block, 'message', javascriptGenerator.ORDER_ATOMIC) != null) message = `content: String(${javascriptGenerator.valueToCode(block, 'message', javascriptGenerator.ORDER_ATOMIC)}),`;
  const color = block.getFieldValue('NAME');
  return [`{
  ${message}
  embeds: [${color.replaceAll(' ', '_').replace(/[!@#$%^&*()-=\][|{}+`~'":;?/.<>,]/g, '_')}]
}`, javascriptGenerator.ORDER_ATOMIC];
};
