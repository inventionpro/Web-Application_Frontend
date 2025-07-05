import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'dash_guild_id';

const blockData = {
  type: 'dash_guild_id',
  message0: 'Guild ID',
  output: null,
  colour: 300,
  tooltip: 'Returns the guild id of the input',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['dash_guild_id'] = function () {
  var code = 'guild.id';
  return [code, JavaScript.ORDER_NONE];
};

const blockName1 = 'dash_value';

const blockData1 = {
  type: 'dash_value',
  message0: 'Value',
  output: null,
  colour: 300,
  tooltip: 'Returns the value of the input',
  helpUrl: ''
};

Blockly.Blocks[blockName1] = {
  init: function () {
    this.jsonInit(blockData1);
  }
};

JavaScript['dash_value'] = function () {
  var code = 'value';
  return [code, JavaScript.ORDER_NONE];
};
