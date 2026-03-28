import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 'button_reply';
const blockData = {
  message0: 'Button Reply %1 Ephemeral %2 Row %3',
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
  const boolean = javascriptGenerator.valueToCode(block, 'BOOLEAN', javascriptGenerator.ORDER_ATOMIC);
  const button = javascriptGenerator.valueToCode(block, 'BUTTON', javascriptGenerator.ORDER_ATOMIC);
  let text1 = button.replace("'", '');
  let button2 = text1.replace("'", '');
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check?.[0] || null;
    if (contentType === Types.Embed[0]) {
      return `await interaction.reply({
  ephemeral: ${boolean},
  embeds: [${content}],
  components: [${button2}]
});`;
    }
  }
  return `await interaction.reply({
  ephemeral: ${boolean},
  content: ${content},
  components: [${button2}]
});`;
};
