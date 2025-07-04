import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_backup_load';

const blockData = {
  message0: '%{BKY_BACKUP_LOAD} %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'GUILD',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'ID',
      check: ['Number', 'String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'BUTTONS'
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
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  var code = `backup.load(${id}, ${sv}).then(async () => {\n${statements}\n});\n`;
  return code;
};
