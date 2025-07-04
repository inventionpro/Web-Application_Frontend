import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_get_rndmber';

const blockData = {
  message0: 'random member',
  colour: '#40BF4A',
  output: 'Member',
  tooltip: 'Gets a random member from the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = ['randomUser.user', JavaScript.ORDER_NONE];
  return code;
};
Blockly.Blocks['ahq_members_get_random_member_in_server'] = {
  init: function () {
    this.jsonInit({
      message0: 'random member in server %1',
      args0: [
        {
          type: 'input_value',
          name: 'SERVER',
          check: 'Server'
        }
      ],
      colour: '#187795',
      output: 'Member',
      tooltip: 'Get a random member from a server.',
      helpUrl: ''
    });
  }
};
JavaScript['ahq_members_get_random_member_in_server'] = function (block) {
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  const code = [`${server}.members.cache.random().user`, JavaScript.ORDER_NONE];
  return code;
};
