import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_get_queue';

const blockData = {
  message0: '%{BKY_GET_QUEUE}',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
    }
  ],
  output: 'queue',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  return [`s4d.player.getQueue(${server}.id)`, JavaScript.ORDER_NONE];
};
