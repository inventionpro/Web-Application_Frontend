import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'edit_msg_by_id';

const blockData = {
  message0: 'Get message with the id of %1 in the channel %2 and edit it to %3',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: ['Number', 'String']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'EDIT',
      check: ['String', 'Embed', 'MessageEmbed', 'embed', 'Messageembed', 'messageembed']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
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
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  let edit = javascriptGenerator.valueToCode(block, 'EDIT', javascriptGenerator.ORDER_ATOMIC);
  if (!String(edit).includes('embeds: [')) {
    edit = `content: String(${edit})`;
  } else {
    edit = edit.replaceAll('{', '').replaceAll('(', '').replaceAll('}', '').replaceAll(')', '');
  }
  const code = `${channel}.messages.fetch(${id}).then(async (msg) => {
       msg.edit({
                    ${edit}
                })
})
`;
  return code;
};
