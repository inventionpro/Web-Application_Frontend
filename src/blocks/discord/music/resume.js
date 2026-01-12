import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_resume';

const blockData = {
  message0: '%{BKY_RESUME}',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const queue = javascriptGenerator.valueToCode(block, 'QUEUE', javascriptGenerator.ORDER_ATOMIC);
  const code = `${queue}.setPaused(false)\n`;
  return code;
};
