import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_backup_list';
const blockData = {
  message0: 'backups',
  output: Types.Array,
  colour: '#187795',
  tooltip: 'Gets list of backup ids',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`_S4D_backups`, javascriptGenerator.ORDER_NONE];
};
