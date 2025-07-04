import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const search = JavaScript.valueToCode(block, 'SEARCH', JavaScript.ORDER_ATOMIC);
  const code = `queue.play(${search});\n`;
  return code;
};
