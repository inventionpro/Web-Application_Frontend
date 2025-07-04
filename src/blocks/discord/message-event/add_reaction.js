import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_add_reaction';

const blockData = {
  message0: 'add reaction %1 to the received message',
  args0: [
    {
      type: 'input_value',
      name: 'REACTION',
      check: 'String'
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
  const reaction = JavaScript.valueToCode(block, 'REACTION', JavaScript.ORDER_ATOMIC);
  const code = `s4dmessage.react(${reaction});`;
  return code;
};
