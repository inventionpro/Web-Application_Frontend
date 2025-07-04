import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_roblox_user_group_rank';

const blockData = {
  message0: 'roblox user group rank',
  args0: [],
  colour: 0,
  output: 'String',
  tooltip: "The roblox player's rank in the group.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`roblox_group_rank`, JavaScript.ORDER_NONE];
  return code;
};
