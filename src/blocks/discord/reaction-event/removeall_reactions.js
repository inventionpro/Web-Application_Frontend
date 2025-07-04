import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_remove_all_reactions';

const blockData = {
  message0: 'remove all reactions on message %1',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
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
  let code = `${message}.reactions.removeAll()\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_REACT_NO_MESSAGE',
    types: ['MESSAGE']
  }
]);
