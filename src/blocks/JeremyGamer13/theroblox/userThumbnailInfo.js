import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_roblox_user_thumbnail_info';
const blockData = {
  message0: 'roblox user thumbnail %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['request state', 'state'],
        ['url', 'imageUrl']
      ]
    }
  ],
  colour: 0,
  output: Types.String,
  tooltip: "Get thumbnail information from a roblox account's profile.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE');
  return [`roblox_user_thumbnail[0].${type}`, javascriptGenerator.ORDER_NONE];
};
