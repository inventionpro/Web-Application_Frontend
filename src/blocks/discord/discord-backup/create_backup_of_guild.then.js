import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_create_backup_of_guild_then';
const blockData = {
  message0: '%{BKY_CREATE_BACKUP_OF_GUILD_THEN} %1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'GUILD',
      check: Types.Server
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'THEN');
  const sv = javascriptGenerator.valueToCode(block, 'GUILD', javascriptGenerator.ORDER_ATOMIC);
  return `backup.create(${sv}, { jsonBeautify: true }).then(async (backupData) => {
${statements}
});`;
};
