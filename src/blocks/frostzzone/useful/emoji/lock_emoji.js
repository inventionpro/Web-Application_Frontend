import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'fz_lock_emoji';
const blockData = {
  message0: 'Lock/add role with id %2 to emoji %1',
  args0: [
    {
      type: 'input_value',
      name: 'EMOJI',
      check: Types.Emoji
    },
    {
      type: 'input_value',
      name: 'ROLE',
      check: Types.Role
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const emoji = javascriptGenerator.valueToCode(block, 'EMOJI', javascriptGenerator.ORDER_ATOMIC);
  const role = javascriptGenerator.valueToCode(block, 'ROLE', javascriptGenerator.ORDER_ATOMIC);
  return `${emoji}.roles.add([${role}]);`;
};
