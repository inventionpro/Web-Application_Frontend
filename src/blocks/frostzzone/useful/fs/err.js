import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

const blockName = 'frost_fs_err';
const blockData = {
  message0: 'err',
  args0: [],
  output: T(Types.String, Types.Boolean),
  colour: '#a5745b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['err', javascriptGenerator.ORDER_NONE];
};
