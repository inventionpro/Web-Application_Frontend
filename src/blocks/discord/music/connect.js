import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_connect';

const blockData = {
  message0: '%{BKY_CONNECT}',
  args0: [
    {
      type: 'input_value',
      name: 'VOICECHANNEL',
      check: 'VoiceChannel'
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
  const code = `await queue.connect(${voice})\n;`;
  return code;
};
