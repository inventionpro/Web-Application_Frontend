import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_minecraft_bedrock_players';

const blockData = {
  message0: 'bedrock %1 players',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['currently online', 'online'],
        ['max amount of', 'max']
      ]
    }
  ],
  colour: 190,
  output: 'Number',
  tooltip: 'Get player information from the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE');
  const code = [`result_bedrock.players.${type}`, javascriptGenerator.ORDER_NONE];
  return code;
};
