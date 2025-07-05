import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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
      check: ['String', 'Array']
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

JavaScript[blockName] = function (block) {
  var gild = JavaScript.valueToCode(block, 'GUILD', JavaScript.ORDER_ATOMIC);
  var options = JavaScript.statementToCode(block, 'OPTIONS');
  var guild;
  if (gild == undefined || gild == null || !gild.length) {
    guild = ``;
  } else {
    guild = `guildID: ${gild}`;
  }
  var code = `synchronizeSlashCommands(s4d.client, [
${options}
],{
    debug: false,
    ${guild}
});\n`;
  return code;
};
