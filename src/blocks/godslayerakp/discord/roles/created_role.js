import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

Blockly.Blocks['gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role'] = {
  init: function () {
    this.jsonInit({
      message0: 'created role',
      colour: '#2EB66B',
      output: Types.Role,
      tooltip: 'The role that was created.'
    });
  }
};

javascriptGenerator.forBlock['gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role'] = function () {
  return [`s4d_create_role_then_role`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions('gsa_jg_create_role_with_name_in_server_with_color_then_do_created_role', [
  {
    type: 'hasparent',
    message: '$This block needs to be in a "create role with name () in server () with color () then do" block!',
    types: ['gsa_jg_create_role_with_name_in_server_with_color_then_do']
  }
]);
