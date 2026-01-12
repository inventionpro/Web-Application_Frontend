import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_java_motd';

const blockData = {
  message0: 'get %1 MOTD java',
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
  colour: 120,
  output: 'String',
  tooltip: 'Get the MOTD of the Java server. Raw includes text tags, Clean removes the text tags, and HTML converts the MOTD to HTML.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE');
  const code = [`result_java.motd.${type}`, javascriptGenerator.ORDER_NONE];
  return code;
};
