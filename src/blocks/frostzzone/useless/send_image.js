import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_image';

const blockData = {
  message0: '%{BKY_FSEND_IMAGE}',
  args0: [
    {
      type: 'input_value',
      name: 'image',
      check: 'String'
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
  const message = JavaScript.valueToCode(block, 'image', JavaScript.ORDER_ATOMIC);
  const code = `
            let embed = new Discord.EmbedBuilder()
        embed.setImage(${message});
        (s4dmessage.channel).send({
            embeds: [embed]
        });`;
  return code;
};
