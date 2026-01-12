import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_playing';

const blockData = {
  message0: '%{BKY_PLAYING2}',
  args0: [
    {
      type: 'input_value',
      name: 'QUEUE',
      check: 'queue'
    }
  ],
  output: 'Boolean',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const queue = javascriptGenerator.valueToCode(block, 'QUEUE', javascriptGenerator.ORDER_ATOMIC);
  return [`${queue}.playing`, javascriptGenerator.ORDER_NONE];
};
