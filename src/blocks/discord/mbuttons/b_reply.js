import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'button_reply';

const blockData = {
  message0: 'Button Reply %1 Ephemeral %2 Row %3',
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
      check: ['String', 'ButtonRow']
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
  const boolean = JavaScript.valueToCode(block, 'BOOLEAN', JavaScript.ORDER_ATOMIC);
  const button = JavaScript.valueToCode(block, 'BUTTON', JavaScript.ORDER_ATOMIC);
  let text1 = button.replace("'", '');
  let button2 = text1.replace("'", '');
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'Embed' || (!contentType && typeof contentType === 'object')) {
      const code = `await interaction.reply({ ephemeral: ${boolean}, embeds: [${content}], components: [${button2}] });\n`;
      return code;
    } else if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      const code = `await interaction.reply({${content}});\n`;
      return code;
    } else {
      const code = `await interaction.reply({ ephemeral: ${boolean}, content: ${content}, components: [${button2}] });\n`;
      return code;
    }
  } else {
    const code = `await interaction.reply({ ephemeral: ${boolean}, content: ${content}, components: [${button2}] });\n`;
    return code;
  }
};
