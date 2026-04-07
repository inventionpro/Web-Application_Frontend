import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

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
  output: T(Types.String, Types.Number),
  tooltip: 'Get information from the server. Gamemode ID outputs as a Number, and the other ones are Strings/Text.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE');
  return [`result_bedrock.${type}`, javascriptGenerator.ORDER_NONE];
};
