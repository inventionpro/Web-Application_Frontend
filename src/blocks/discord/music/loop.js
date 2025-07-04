import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_loop';

const blockData = {
  message0: '%{BKY_LOOP}',
  args0: [
    {
      type: 'input_value',
      name: 'QUEUE',
      check: 'queue'
    },
    {
      type: 'input_value',
      name: 'LOOPING',
      check: 'Boolean'
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
  const looping = JavaScript.valueToCode(block, 'LOOPING', JavaScript.ORDER_ATOMIC);
  let code = '';
  if (looping === 'true') {
    code = `${queue}.setRepeatMode(QueueRepeatMode.QUEUE)\n`;
  } else {
    code = `${queue}.setRepeatMode(QueueRepeatMode.OFF)\n`;
  }
  return code;
};
