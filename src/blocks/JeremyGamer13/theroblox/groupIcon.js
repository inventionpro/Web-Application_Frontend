import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_roblox_group_icon';
const blockData = {
  message0: 'roblox group icon',
  args0: [],
  colour: 0,
  output: Types.Number,
  tooltip: "The roblox group's icon by ID.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['roblox_group_icon', javascriptGenerator.ORDER_NONE];
};
