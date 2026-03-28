import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'dash_guild_id';
const blockData = {
  type: 'dash_guild_id',
  message0: 'Guild ID',
  output: Types.Any,
  colour: 300,
  tooltip: 'Returns the guild id of the input',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['dash_guild_id'] = function () {
  return ['guild.id', javascriptGenerator.ORDER_NONE];
};

const blockName1 = 'dash_value';
const blockData1 = {
  type: 'dash_value',
  message0: 'Value',
  output: Types.Any,
  colour: 300,
  tooltip: 'Returns the value of the input',
  helpUrl: ''
};

Blockly.Blocks[blockName1] = {
  init: function () {
    this.jsonInit(blockData1);
  }
};

javascriptGenerator.forBlock['dash_value'] = function () {
  return ['value', javascriptGenerator.ORDER_NONE];
};
