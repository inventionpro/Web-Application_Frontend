import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'register_commands';

const blockData = {
  type: 'register_commands',
  message0: 'Add commands to the commands list page %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'commands'
    }
  ],
  colour: 257,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['register_commands'] = function (block) {
  var statements_commands = JavaScript.statementToCode(block, 'commands');
  var code = `${statements_commands}`;
  return code;
};
