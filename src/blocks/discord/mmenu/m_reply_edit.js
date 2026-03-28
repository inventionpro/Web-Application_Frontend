import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 'm_edit';
const blockData = {
  message0: 'Context menu reply edit %1 row %2',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.MessageContent
    },
    {
      type: 'input_value',
      name: 'BUTTON',
      check: T([Types.String, 'ButtonRow'])
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
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const button = javascriptGenerator.valueToCode(block, 'BUTTON', javascriptGenerator.ORDER_ATOMIC);
  let text1 = button.replace("'", '');
  let button2 = text1.replace("'", '');

  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === Types.Embed[0])
      return `await interaction.editReply({
  embeds: [${content}],
  components: [${button2}]
});`;
  }
  return `await interaction.editReply({
  content: ${content},
  components: [${button2}]
});`;
};
