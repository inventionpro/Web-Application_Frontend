import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'loop_stop';

const blockData = {
  message0: 'Stop the loop',
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = `guildQueue.setRepeatMode(RepeatMode.DISABLED);`;
  return code;
};
