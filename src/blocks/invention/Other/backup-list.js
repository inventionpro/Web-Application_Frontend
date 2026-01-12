import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'inv_backup_list';

const blockData = {
  message0: 'backups',
  output: 'Array',
  colour: '#187795',
  tooltip: 'Gets list of backup ids',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  var code = `_S4D_backups`;

  return [code, javascriptGenerator.ORDER_NONE];
};
