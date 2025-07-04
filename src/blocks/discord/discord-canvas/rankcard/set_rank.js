import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 's4d_set_rank';

const blockData = {
  message0: '%{BKY_SET_RANK}',
  args0: [
    {
      type: 'input_value',
      name: 'VALUE',
      check: ['Number', 'String']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  return `.setRank(${value})`;
};
