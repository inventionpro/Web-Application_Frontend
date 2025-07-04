import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'weird-to-normal';

const blockData = {
  message0: 'weird char to normal %1',
  args0: [
    {
      type: 'input_value',
      name: 'CHAR',
      check: ['String']
    }
  ],
  output: 'String',
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const string = JavaScript.valueToCode(block, 'CHAR', JavaScript.ORDER_ATOMIC);
  const code = [`weirdToNormalChars(${string})`, JavaScript.ORDER_NONE];
  return code;
};
