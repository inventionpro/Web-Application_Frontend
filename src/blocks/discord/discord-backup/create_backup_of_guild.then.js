import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_create_backup_of_guild_then';

const blockData = {
  message0: '%{BKY_CREATE_BACKUP_OF_GUILD_THEN} %1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'GUILD',
      check: 'Server'
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

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'THEN');
  const sv = JavaScript.valueToCode(block, 'GUILD', JavaScript.ORDER_ATOMIC);
  var code = `backup.create(${sv}, {jsonBeautify: true}).then(async (backupData) => {\n${statements}\n});\n`;
  return code;
};
