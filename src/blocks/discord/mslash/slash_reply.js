import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 'slash_reply';
const blockData = {
  message0: '%{BKY_S_REPLY}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'BOOLEAN',
      check: Types.Boolean
    },
    {
      type: 'input_value',
      name: 'BUTTON',
      check: T([Types.String, 'ButtonRow', 'ButtonMenu'])
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
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC) || 'No content';
  const boolean = javascriptGenerator.valueToCode(block, 'BOOLEAN', javascriptGenerator.ORDER_ATOMIC) || true;
  let button = javascriptGenerator.valueToCode(block, 'BUTTON', javascriptGenerator.ORDER_ATOMIC);
  if (!button) {
    button = '';
  } else {
    const buttonArg = block.getInput('BUTTON');
    const buttonBlock = buttonArg.connection.targetConnection.sourceBlock_;
    if (buttonBlock.type === 'text' || buttonBlock.type === 'jg_text_remake_paragraph_quotes') {
      button = button.slice(1, -1);
    }
  }

  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (Types.MessagePayload.includes(contentType))
      return `await interaction.reply({
  ephemeral: ${boolean || false},
  components: [${button}],
  ...${content}
});`;
  }
  return `await interaction.reply({
  content: ${content},
  ephemeral: ${boolean || false},
  components: [${button}]
});`;
};
