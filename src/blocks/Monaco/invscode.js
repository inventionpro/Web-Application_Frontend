import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'monaco_invite_with_code';

const blockData = {
  type: 'monaco_invite_with_code',
  message0: 'get invite with code %1 in server %2',
  args0: [
    {
      type: 'input_value',
      name: 'invite',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  colour: '#4C97FF',
  output: 'Invite',
  inputsInline: true,
  tooltip: 'Get an invite with specified code in a specified server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_invite_with_code'] = function (block) {
  var value_invite = JavaScript.valueToCode(block, 'invite', JavaScript.ORDER_ATOMIC);
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.invites.fetch(String(${value_invite}))`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.ORDER_NONE];
};
