import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_purge';

const blockData = {
  message0: '%{BKY_PURGE}',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'AMOUNT',
      check: 'Number'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  colour: '#1a75ff',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const amount = JavaScript.valueToCode(block, 'AMOUNT', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.bulkDelete((${amount}|1)); \n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_PURGE_CHANNEL',
    types: ['CHANNEL']
  },
  {
    type: 'notempty',
    message: 'RES_PURGE_AMOUNT',
    types: ['AMOUNT']
  }
]);
