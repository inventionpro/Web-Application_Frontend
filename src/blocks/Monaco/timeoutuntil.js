import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  var value_member = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC);
  var code = `${value_member}.communicationDisabledUntil`;
  return [code, JavaScript.ORDER_NONE];
};
