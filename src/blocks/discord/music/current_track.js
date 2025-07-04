import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_current_track';

const blockData = {
  message0: '%{BKY_CURRENT_TRACK}',
  args0: [
    {
      type: 'input_value',
      name: 'QUEUE',
      check: 'queue'
    }
  ],
  output: 'String',
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
  const queue = JavaScript.valueToCode(block, 'QUEUE', JavaScript.ORDER_ATOMIC);
  return [`${queue}.current`, JavaScript.ORDER_NONE];
};
