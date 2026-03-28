import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_remove_all_reactions';
const blockData = {
  message0: 'remove all reactions on message %1',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: Types.Message
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
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return `${message}.reactions.removeAll();`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_REACT_NO_MESSAGE',
    types: ['MESSAGE']
  }
]);
