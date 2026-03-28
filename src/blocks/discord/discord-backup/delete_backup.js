import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_delete_backup';
const blockData = {
  message0: '%{BKY_DELETE_BACKUP}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: T(Types.String, Types.Number)
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
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  return `backup.remove(${id});`;
};
