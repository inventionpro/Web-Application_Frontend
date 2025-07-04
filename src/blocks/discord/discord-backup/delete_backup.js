import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_delete_backup';

const blockData = {
  message0: '%{BKY_DELETE_BACKUP}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: ['Number', 'String']
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
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  var code = `backup.remove(${id});\n`;
  return code;
};
