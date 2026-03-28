import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

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
  output: Types.UserResolve,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('type');
  if (type == 'member') {
    return ['reaction.message.guild.members.resolve(m.users.cache.random())', javascriptGenerator.ORDER_NONE];
  } else {
    return ['reaction.users.cache.random()', javascriptGenerator.ORDER_NONE];
  }
};
