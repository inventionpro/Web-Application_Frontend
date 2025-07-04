import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'random_reacting_member_user';

const blockData = {
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['member', 'member'],
        ['user', 'user']
      ]
    }
  ],
  message0: 'Random reacting %1',
  colour: '#187795',
  output: 'Member',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const type = block.getFieldValue('type');
  var code;
  if (type == 'member') {
    code = ['reaction.message.guild.members.resolve(m.users.cache.random())', JavaScript.ORDER_NONE];
  } else {
    code = ['reaction.users.cache.random()', JavaScript.ORDER_NONE];
  }
  return code;
};
