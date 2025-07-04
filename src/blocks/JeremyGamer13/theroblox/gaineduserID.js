import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_roblox_user_id';

const blockData = {
  message0: 'roblox user id',
  args0: [],
  colour: 0,
  output: 'Number',
  tooltip: "The roblox player's ID by username.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`gained_roblox_user_id`, JavaScript.ORDER_NONE];
  return code;
};
