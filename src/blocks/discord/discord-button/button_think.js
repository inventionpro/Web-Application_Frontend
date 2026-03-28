import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_button_think';
const blockData = {
  message0: 'think as hidden? %1',
  args0: [
    {
      type: 'input_value',
      name: 'TOF',
      check: Types.Boolean
    }
  ],
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const tof = javascriptGenerator.valueToCode(block, 'TOF', javascriptGenerator.ORDER_ATOMIC);
  return `await i.deferReply({ ephemeral: ${tof === null ? false : tof} });`;
};
