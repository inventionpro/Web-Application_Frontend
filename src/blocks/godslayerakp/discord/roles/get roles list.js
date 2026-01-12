import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock['gsa_get_all_roles_on_member'] = (block) => {
  return [`${javascriptGenerator.valueToCode(block, 'member', javascriptGenerator.ORDER_ATOMIC)}._roles`, javascriptGenerator.ORDER_ATOMIC];
};
