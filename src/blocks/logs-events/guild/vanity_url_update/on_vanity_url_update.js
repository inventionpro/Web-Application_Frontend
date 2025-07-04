import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'on_vanity_update';

const blockData = {
  message0: 'When guild update a vanity url %1 %2',
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
  const code = `s4d.client.on("guildVanityURLUpdate",async (guild, oldVanityURL, newVanityURL) => {\n${statements}\n});\n`;
  return code;
};
