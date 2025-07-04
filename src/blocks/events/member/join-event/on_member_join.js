import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_on_member_join';

const blockData = {
  message0: '%{BKY_ON_MEMBER_JOIN} %1 %2',
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
  const code = `s4d.client.on('guildMemberAdd', async (param1) => {\ns4d.joiningMember = param1;\n${statements}s4d.joiningMember = null\n});\n`;
  return code;
};
