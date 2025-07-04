import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'UserLeave';

const blockData = {
  message0: 'When User Leave %1 %2',
  colour: '#F5AB1A',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ]
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  const code = `s4d.Inviter.on('UserLeave', async function (member,uses,inviter,invite) {\n${statements}\n});\n`;
  return code;
};
