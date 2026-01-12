import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'monaco_member_timeout_until_timestamp';

const blockData = {
  type: 'monaco_member_timeout_until_timestamp',
  message0: "Member %1's timeout end timestamp",
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Member'
    }
  ],
  colour: '#4C97FF',
  output: 'number',
  inputsInline: true,
  tooltip: "The timestamp of when the member's timeout will be removed",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_member = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_member}.communicationDisabledUntilTimestamp`;
  return [code, javascriptGenerator.ORDER_NONE];
};
