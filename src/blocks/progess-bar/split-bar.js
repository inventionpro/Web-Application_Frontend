import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../types.js';

const blockName = 'split_bar';
const blockData = {
  message0: 'Create Split Progess Bar Total %1 Current %2 Size %3 Line %4 Slider %5',
  args0: [
    {
      type: 'input_value',
      name: 'TOTAL',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'CURRENT',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'SIZE',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'LINE',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'SLIDER',
      check: T(Types.String, Types.Number)
    }
  ],
  colour: '#5BA55B',
  output: Types.String,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const total = javascriptGenerator.valueToCode(block, 'TOTAL', javascriptGenerator.ORDER_ATOMIC);
  const current = javascriptGenerator.valueToCode(block, 'CURRENT', javascriptGenerator.ORDER_ATOMIC);
  const size = javascriptGenerator.valueToCode(block, 'SIZE', javascriptGenerator.ORDER_ATOMIC) || null;
  const line = javascriptGenerator.valueToCode(block, 'LINE', javascriptGenerator.ORDER_ATOMIC) || null;
  const slider = javascriptGenerator.valueToCode(block, 'SLIDER', javascriptGenerator.ORDER_ATOMIC) || null;
  return [`progressbar.splitBar(${total}, ${current}, ${size},${line},${slider});`, javascriptGenerator.ORDER_ATOMIC];
};
