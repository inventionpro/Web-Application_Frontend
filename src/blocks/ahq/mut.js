import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'mute_ahq';
const blockData = {
  message0: 'timeout member %1 %2 for seconds %3 %4 reason %5',
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Member'
    },
    { type: 'input_dummy' },
    {
      type: 'input_value',
      name: 'time',
      check: 'Number'
    },
    { type: 'input_dummy' },
    {
      type: 'input_value',
      name: 'reason',
      check: 'String'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const member = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_NONE);
  const time = JavaScript.valueToCode(block, 'time', JavaScript.ORDER_NONE);
  const reason = JavaScript.valueToCode(block, 'reason', JavaScript.ORDER_NONE);
  const code = `${member.replace('.user', '').replace('.user', '')}.timeout((${time} * 1000), ${reason})
    `;
  return code;
};
