import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_tests_deleteInput';

const blockData = {
  message0: 'Remove Input %1',
  args0: [
    {
      type: 'input_value',
      name: 'A',
      check: null
    }
  ],
  colour: 0,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  isHiden: true
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const A = javascriptGenerator.valueToCode(block, 'A', javascriptGenerator.ORDER_ATOMIC);
  const code = `${A}`;
  return code;
};
