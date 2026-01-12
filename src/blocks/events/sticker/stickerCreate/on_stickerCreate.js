import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'on_stickercreate';

const blockData = {
  message0: 'When sticker is created %1 %2',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'STATEMENTS');
  const code = `s4d.client.on(Discord.Events.GuildStickerCreate, async (sticker) => {\n${statements}\n});\n`;
  return code;
};
