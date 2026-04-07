import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'jg_web_foreachkeyinput';
const blockData = {
  message0: 'key',
  args0: [],
  colour: 240,
  output: Types.Any,
  tooltip: 'The key name found by the "Get all keys then for each" block.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`s4dkey`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be in a "get all keys then for each" block!',
    types: ['jg_web_foreachkey']
  }
]);
