import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_bot_amount';

const blockData = {
  message0: '%{BKY_BOT_AMOUNT}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'T',
      options: [
        ['ping', 'pings'],
        ['%{BKY_SERVERS}s', 'servers'],
        ['%{BKY_USERS}', 'users'],
        ['%{BKY_CHANNELS}', 'channels'],
        ['uptime', 'uptime']
      ]
    }
  ],
  colour: '#4C97FF',
  output: 'String',
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const t = block.getFieldValue('T');
  let code = '';
  if (t === 'pings') {
    code = 's4d.client.ws.ping';
  } else if (t === 'servers') {
    code = 's4d.client.guilds.cache.size';
  } else if (t === 'channels') {
    code = 's4d.client.channels.cache.size';
  } else if (t === 'users') {
    code = 's4d.client.users.cache.size';
  } else if (t === 'uptime') {
    code = 's4d.client.uptime';
  }
  return [code, JavaScript.ORDER_NONE];
};
