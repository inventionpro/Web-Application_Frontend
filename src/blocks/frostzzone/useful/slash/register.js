import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../../types.js';

const blockName = 'frost_slash_register';
const blockData = {
  message0: 'Create slash commands %1 Test Guild ID list (blank for global commands)%2 Commands %3',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'GUILD',
      check: T(Types.String, Types.Array)
    },
    {
      type: 'input_statement',
      name: 'OPTIONS'
    }
  ],
  inputsInline: false,
  colour: '#f5ab1a',
  tooltip: '⚠ Deletes commands set by "Slash command GUI" ⚠',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var gild = javascriptGenerator.valueToCode(block, 'GUILD', javascriptGenerator.ORDER_ATOMIC);
  var options = javascriptGenerator.statementToCode(block, 'OPTIONS');
  var guild = '';
  if (gild && gild.length) guild = `guildID: ${gild}`;
  return `synchronizeSlashCommands(s4d.client, [
${options}
], {
  debug: false,
  ${guild}
});`;
};
