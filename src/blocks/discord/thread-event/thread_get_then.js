import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_thread_get_then';

const blockData = {
  message0: 'get the thread with id %1 in channel %2 then %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
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

JavaScript[blockName] = function (block) {
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const then = JavaScript.statementToCode(block, 'THEN');
  const then2 = then.replace(';', '');
  const code = `${channel}.threads.fetch(${id}).then(thread => ${then2});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'You must specify a valid thread channel!',
    types: ['CHANNEL']
  }
]);
