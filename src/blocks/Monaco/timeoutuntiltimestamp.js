import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  var value_member = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_member}.communicationDisabledUntilTimestamp`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.ORDER_NONE];
};
