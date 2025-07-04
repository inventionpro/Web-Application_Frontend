import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 'jose_send_image_slash';

const blockData = {
  message0: 'send in slash command as hidden %1 with image %2',
  args0: [
    {
      type: 'input_value',
      name: 'HIDDEN',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'IMAGE',
      check: 'image'
    }
  ],
  colour: '#4c88ff',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: 'Send a image with a slash command.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const hidden = JavaScript.valueToCode(block, 'HIDDEN', JavaScript.ORDER_ATOMIC);
  const image = JavaScript.valueToCode(block, 'IMAGE', JavaScript.ORDER_ATOMIC);
  let code = `interaction.reply({ 
      files: [${image}],
      ephemeral: ${hidden}
    });
    `;
  return code;
};
