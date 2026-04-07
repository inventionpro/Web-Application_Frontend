import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_roblox_user_id';
const blockData = {
  message0: 'roblox user id',
  args0: [],
  colour: 0,
  output: Types.Number,
  tooltip: "The roblox player's ID by username.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['gained_roblox_user_id', javascriptGenerator.ORDER_NONE];
};
