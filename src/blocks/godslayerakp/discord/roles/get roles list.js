import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

Blockly.Blocks['gsa_get_all_roles_on_member'] = {
  init: function () {
    this.jsonInit({
      message0: "get all role id's on member %1 as a list",
      args0: [
        {
          type: 'input_value',
          name: 'member',
          check: 'Member'
        }
      ],
      output: ['List', 'Array'],
      inputsInline: true,
      colour: '#D14081',
      tooltip: "gets a list of all role id's on a member",
      helpUrl: ''
    });
  }
};

JavaScript['gsa_get_all_roles_on_member'] = function (block) {
  return [`${JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC)}._roles`, JavaScript.ORDER_ATOMIC];
};
