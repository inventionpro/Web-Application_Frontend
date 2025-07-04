import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'create_ahq_handler';
const blockData = {
  type: 'block_type',
  message0: 'Create command handler %1 Prefix %2 %3 OwnerId %4 %5 Owner Only Message %6 %7 Set NSFW channel only message %8 %9 Set not mod message %10',
  args0: [
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'TOKEN',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'ownerId',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'notowner',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'ahq',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'notperms',
      check: 'String'
    }
  ],
  colour: '#3333ff',
  tooltip: '???',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'TOKEN', JavaScript.ORDER_ATOMIC);
  const code = `const ahqhandler = {
        "prefix": ${value},
        "owner": ${JavaScript.valueToCode(block, 'ownerId', JavaScript.ORDER_ATOMIC)},
        "not-owner": ${JavaScript.valueToCode(block, 'notowner', JavaScript.ORDER_ATOMIC)},
        "nsfw": ${JavaScript.valueToCode(block, 'ahq', JavaScript.ORDER_ATOMIC)},
        "not-perms": ${JavaScript.valueToCode(block, 'notperms', JavaScript.ORDER_ATOMIC)}
    }`;
  return code;
};
