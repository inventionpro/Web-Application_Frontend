import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'monaco_member_timeout_until';

const blockData = {
  type: 'monaco_member_timeout_until',
  message0: "Member %1's timeout end time",
  args0: [
    {
      type: 'input_value',
      name: 'member',
      check: 'Member'
    }
  ],
  colour: '#4C97FF',
  output: 'Date',
  inputsInline: true,
  tooltip: "Time at which a member's timeout will end.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_member = javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_member}.communicationDisabledUntil`;
  return [code, javascriptGenerator.ORDER_NONE];
};
