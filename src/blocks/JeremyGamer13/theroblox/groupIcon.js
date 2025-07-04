import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_roblox_group_icon';

const blockData = {
  message0: 'roblox group icon',
  args0: [],
  colour: 0,
  output: 'Number',
  tooltip: "The roblox group's icon by ID.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`roblox_group_icon`, JavaScript.ORDER_NONE];
  return code;
};
