import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'ahq_value_snd';

const blockData = {
  message0: 'find channel by %1 %2 on server %3 %4',
  args0: [
    {
      type: 'field_dropdown',
      name: 'channel',
      options: [
        ['ID', 'id'],
        ['name', 'name']
      ]
    },
    {
      type: 'input_value',
      name: 'baluech',
      check: 'String'
    },
    {
      type: 'field_dropdown',
      name: 'server',
      options: [
        ['ID', 'id'],
        ['name', 'name']
      ]
    },
    {
      type: 'input_value',
      name: 'baluesr',
      check: 'String'
    }
  ],
  colour: '#3366ff',
  output: 'ahqfind',
  tooltip: 'Search for a channel in a specific server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const ahq = block.getFieldValue('channel');
  const server = block.getFieldValue('server');
  const valch = JavaScript.valueToCode(block, 'baluech', JavaScript.ORDER_NONE);
  const valsr = JavaScript.valueToCode(block, 'baluesr', JavaScript.ORDER_NONE);
  const code = [`s4d.client.guilds.cache.find(server => server.${server} == ${valsr}).channels.cache.find(ch => ch.${ahq} == ${valch})`, JavaScript.ORDER_NONE];
  return code;
};
