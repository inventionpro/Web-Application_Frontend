import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'create_ahq_handler';
const blockData = {
  type: 'block_type',
  message0: 'Create command handler %1 Prefix %2 OwnerId %3 Owner Only Message %4 Set NSFW channel only message %5 Set not mod message %6',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'TOKEN',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'ownerId',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'notowner',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'ahq',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'notperms',
      check: 'String'
    }
  ],
  colour: '#3333ff',
  tooltip: '???',
  helpUrl: '',
  inputsInline: false
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'TOKEN', javascriptGenerator.ORDER_ATOMIC);
  const code = `const ahqhandler = {
        "prefix": ${value},
        "owner": ${javascriptGenerator.valueToCode(block, 'ownerId', javascriptGenerator.ORDER_ATOMIC)},
        "not-owner": ${javascriptGenerator.valueToCode(block, 'notowner', javascriptGenerator.ORDER_ATOMIC)},
        "nsfw": ${javascriptGenerator.valueToCode(block, 'ahq', javascriptGenerator.ORDER_ATOMIC)},
        "not-perms": ${javascriptGenerator.valueToCode(block, 'notperms', javascriptGenerator.ORDER_ATOMIC)}
    }`;
  return code;
};
