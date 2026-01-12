import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_play';

const blockData = {
  message0: '%{BKY_PLAY}',
  args0: [
    {
      type: 'input_value',
      name: 'SEARCH',
      check: 'MusicSearch'
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
  const search = javascriptGenerator.valueToCode(block, 'SEARCH', javascriptGenerator.ORDER_ATOMIC);
  const code = `queue.play(${search});\n`;
  return code;
};
