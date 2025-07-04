import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_remove_reactions';

const blockData = {
  message0: 'remove all reactions on the message %1 with id/name %2',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
    },
    {
      type: 'input_value',
      name: 'EMOJI',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  const message = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC);
  const id = JavaScript.valueToCode(block, 'EMOJI', JavaScript.ORDER_ATOMIC);
  let code = `${message}.reactions.cache.get(${id}).remove()\n`;
  return code;
};
