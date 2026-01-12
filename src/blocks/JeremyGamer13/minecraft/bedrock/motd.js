import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_motd';

const blockData = {
  message0: 'get %1 MOTD bedrock',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['raw', 'raw'],
        ['clean', 'clean'],
        ['HTML', 'html']
      ]
    }
  ],
  colour: 190,
  output: 'String',
  tooltip: 'Get the MOTD of the Bedrock server. Raw includes text tags, Clean removes the text tags, and HTML converts the MOTD to HTML.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE');
  const code = [`result_bedrock.motd.${type}[0]`, javascriptGenerator.ORDER_NONE];
  return code;
};
