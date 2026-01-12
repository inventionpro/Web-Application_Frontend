import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_volume';

const blockData = {
  message0: '%{BKY_VOLUME}',
  args0: [
    {
      type: 'input_value',
      name: 'QUEUE',
      check: 'queue'
    },
    {
      type: 'input_value',
      name: 'VOLUME',
      check: ['Number', 'String']
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
  const vol = javascriptGenerator.valueToCode(block, 'VOLUME', javascriptGenerator.ORDER_ATOMIC);
  const code = `${queue}.setVolume(${vol})\n`;
  return code;
};
