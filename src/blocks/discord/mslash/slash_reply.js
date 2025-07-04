import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'slash_reply';

const blockData = {
  message0: '%{BKY_S_REPLY}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'Embed', 'MessageEmbed']
    },
    {
      type: 'input_value',
      name: 'BOOLEAN',
      check: ['Boolean']
    },
    {
      type: 'input_value',
      name: 'BUTTON',
      check: ['String', 'ButtonRow', 'ButtonMenu']
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
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC) || 'No content';
  const boolean = JavaScript.valueToCode(block, 'BOOLEAN', JavaScript.ORDER_ATOMIC) || true;
  let button = JavaScript.valueToCode(block, 'BUTTON', JavaScript.ORDER_ATOMIC);
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
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'Embed') {
      const code = `await interaction.reply({ embeds: [${content}], ephemeral: ${boolean || false}, components: [${button}] });\n`;
      return code;
    } else if (contentType === 'MessageEmbed') {
      const code = `await interaction.reply({${content}, ephemeral: ${boolean || false}, components: [${button}] });\n`;
      return code;
    } else {
      const code = `await interaction.reply({ content: ${content}, ephemeral: ${boolean || false}, components: [${button}] });\n`;
      return code;
    }
  } else {
    const code = `await interaction.reply({ content: ${content}, ephemeral: ${boolean || false} , components: [${button}] });\n`;
    return code;
  }
};
