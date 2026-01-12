import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'all_roles';

const blockData = {
  message0: 'All roles',
  name: 'roles',
  output: 'String',
  colour: '#56afdb',
  tooltip: 'All of the roles that the member has.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`memberRoles`, javascriptGenerator.ORDER_NONE];
  return code;
};
