import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_leave_server';
const blockData = {
  message0: '%{BKY_LEAVE_SERVER}',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: Types.Server
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
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  return `${server}.leave();`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_VALID_SERVER',
    types: ['SERVER']
  }
]);
