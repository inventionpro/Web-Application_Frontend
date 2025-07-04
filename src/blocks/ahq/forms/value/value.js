import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'something_modal';

const blockData = {
  message0: 'Send forms %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: 'String'
    }
  ],
  output: 'ahq_modal_names',
  colour: '#40BF4A'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const statementsThen = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const code = [`${statementsThen}`, JavaScript.ORDER_NONE];
  return code;
};
