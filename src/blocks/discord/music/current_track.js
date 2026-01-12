import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const queue = javascriptGenerator.valueToCode(block, 'QUEUE', javascriptGenerator.ORDER_ATOMIC);
  return [`${queue}.current`, javascriptGenerator.ORDER_NONE];
};
