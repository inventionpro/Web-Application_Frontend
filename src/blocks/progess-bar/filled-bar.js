import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'filled_bar';

const blockData = {
  message0: 'Create Filled Progess Bar Total %1 Current %2 Size %3 Line %4 Slider %5',
  args0: [
    {
      type: 'input_value',
      name: 'TOTAL',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'CURRENT',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'SIZE',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'LINE',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'SLIDER',
      check: ['String', 'Number']
    }
  ],
  colour: '#5BA55B',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const total = JavaScript.valueToCode(block, 'TOTAL', JavaScript.ORDER_ATOMIC);
  const current = JavaScript.valueToCode(block, 'CURRENT', JavaScript.ORDER_ATOMIC);
  const size = JavaScript.valueToCode(block, 'SIZE', JavaScript.ORDER_ATOMIC) || null;
  const line = JavaScript.valueToCode(block, 'LINE', JavaScript.ORDER_ATOMIC) || null;
  const slider = JavaScript.valueToCode(block, 'SLIDER', JavaScript.ORDER_ATOMIC) || null;
  return [`progressbar.filledBar(${total}, ${current}, ${size},${line},${slider});`, JavaScript.ORDER_ATOMIC];
};
