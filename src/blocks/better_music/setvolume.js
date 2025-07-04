import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'better_volume';

const blockData = {
  message0: 'Set volume to %1',
  args0: [
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

JavaScript[blockName] = function (block) {
  const vol = JavaScript.valueToCode(block, 'VOLUME', JavaScript.ORDER_ATOMIC);
  const code = `guildQueue.setVolume(Number(${vol}))`;
  return code;
};
