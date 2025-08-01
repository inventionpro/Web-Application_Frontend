import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'inv_backup_list_get';

const blockData = {
  message0: 'Get list of backups %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'code'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: 'Gets a list of backup ids',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var statements_code = JavaScript.statementToCode(block, 'code');
  // _S4D_backups expected Output [ "BC5qo", "Jdo91", ...]
  var code = `backup.list().then((_S4D_backups) => {
    ${statements_code}
})`;

  return code;
};
