import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'edit_msg_by_id';
const blockData = {
  message0: 'Get message with the id of %1 in the channel %2 and edit it to %3',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'EDIT',
      check: Types.MessageContent
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
  if (block.getInput('EDIT').connection.targetConnection) {
    const contentType = block.getInput('EDIT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === Types.Embed[0]) {
      edit = `embeds: [${edit}]`;
    } else {
      edit = `content: String(${edit})`;
    }
  } else {
    edit = `content: String(${edit})`;
  }
  return `${channel}.messages.fetch(${id}).then(async (msg) => {
  msg.edit({
    ${edit}
  });
});`;
};
