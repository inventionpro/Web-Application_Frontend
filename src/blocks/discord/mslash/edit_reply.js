import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'slash_edit';

const blockData = {
  message0: '%{BKY_S_EDIT}',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'Embed', 'MessageEmbed']
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
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  const button = JavaScript.valueToCode(block, 'BUTTON', JavaScript.ORDER_ATOMIC);
  let text1 = button.replace("'", '');
  let button2 = text1.replace("'", '');

  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'Embed') {
      const code = `await interaction.editReply({ embeds: [${content}], components: [${button2}] });\n`;
      return code;
    } else if (contentType === 'MessageEmbed') {
      const code = `await interaction.editReply({${content}});\n`;
      return code;
    } else {
      const code = `await interaction.editReply({ content: ${content}, components: [${button2}] });\n`;
      return code;
    }
  } else {
    const code = `await interaction.editReply({ content: ${content}, components: [${button2}] });\n`;
    return code;
  }
};
