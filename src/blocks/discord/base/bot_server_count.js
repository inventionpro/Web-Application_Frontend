import * as Blockly from 'blockly/core';

const blockName = 's4d_bot_server_count';

const blockData = {
  message0: '%{BKY_BOT_SERVER_COUNT}',
  colour: '#5b67a5',
  tooltip: 'How many server(s) the bot is in.',
  output: 'Number',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  const code = ['s4d.client.guilds.cache.size', Blockly.JavaScript.ORDER_NONE];
  return code;
};
