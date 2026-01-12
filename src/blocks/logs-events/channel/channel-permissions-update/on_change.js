import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'on_channelPermissionsChange';

const blockData = {
  message0: 'When channel permissions is changed %1 %2',
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
  // guildChannelPermissionsUpdate is a discord-logs event
  const code = `s4d.client.on('guildChannelPermissionsUpdate', async (channel, oldPermissions, newPermissions) => {\n${statements}\n});\n`;
  return code;
};
