import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_delete_role';

const blockData = {
  message0: '%{BKY_DELETE_ROLE}',
  args0: [
    {
      type: 'input_value',
      name: 'ROLE',
      check: ['String', 'Role']
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  const code = `${role}.delete();\n`;
  return code;
};
