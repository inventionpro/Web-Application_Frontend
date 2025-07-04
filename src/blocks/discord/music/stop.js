import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_stop';

const blockData = {
  message0: '%{BKY_STOP}',
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
  const code = `${queue}.destroy()\n`;
  return code;
};
