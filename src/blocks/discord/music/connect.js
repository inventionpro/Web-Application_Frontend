import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_connect';
const blockData = {
  message0: '%{BKY_CONNECT}',
  args0: [
    {
      type: 'input_value',
      name: 'VOICECHANNEL',
      check: Types.Channel
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
  const voice = javascriptGenerator.valueToCode(block, 'VOICECHANNEL', javascriptGenerator.ORDER_ATOMIC) || 's4dmessage.member.voice.channel';
  return `await queue.connect(${voice});`;
};
