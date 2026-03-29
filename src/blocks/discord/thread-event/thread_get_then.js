import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_thread_get_then';
const blockData = {
  message0: 'get the thread with id %1 in channel %2 then %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  colour: '#2a97b8',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  const then2 = then.replace(';', '');
  return `${channel}.threads.fetch(${id}).then(thread => ${then2});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'You must specify a valid thread channel!',
    types: ['CHANNEL']
  }
]);
