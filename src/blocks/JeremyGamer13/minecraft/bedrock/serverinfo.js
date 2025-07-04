import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_server_info';

const blockData = {
  message0: 'bedrock server %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['gamemode', 'gamemode'],
        ['server ID', 'serverid']
      ]
    }
  ],
  colour: 190,
  output: ['String', 'Number'],
  tooltip: 'Get information from the server. Gamemode ID outputs as a Number, and the other ones are Strings/Text.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const type = block.getFieldValue('TYPE');
  const code = [`result_bedrock.${type}`, JavaScript.ORDER_NONE];
  return code;
};
