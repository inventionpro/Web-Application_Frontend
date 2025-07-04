import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_back';

const blockData = {
  message0: '%{BKY_BACK}',
  args0: [
    {
      type: 'input_value',
      name: 'QUEUE',
      check: 'queue'
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

JavaScript[blockName] = function (block) {
  const queue = JavaScript.valueToCode(block, 'QUEUE', JavaScript.ORDER_ATOMIC);
  const code = `${queue}.back()\n`;
  return code;
};
