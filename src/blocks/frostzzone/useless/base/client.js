import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_client';

const blockData = {
  message0: 'Client %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'T',
      options: [
        ['# of Servers', 'servers'],
        ['%{BKY_USERS}', 'users'],
        ['%{BKY_CHANNELS}', 'channels']
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
  if (t === 'servers') {
    code = 's4d.client.guilds.cache.size';
  } else if (t === 'channels') {
    code = 's4d.client.channels.cache.size';
  } else if (t === 'users') {
    code = 's4d.client.users.cache.size';
  }
  return [code, JavaScript.ORDER_NONE];
};
