import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'on_channelTopicChange';

const blockData = {
  message0: 'When channel topic is changed %1 %2',
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
  // guildChannelTopicUpdate is a discord-logs event
  const code = `s4d.client.on('guildChannelTopicUpdate', async (channel, oldTopic, newTopic) => {
  ${statements}
});\n`;
  return code;
};
