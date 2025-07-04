import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'temp_member_name';

const blockData = {
  message0: 'name of channel creator',
  colour: '#40BF4A',
  args0: [],
  tooltip: null,
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`s4dmember.user.username`, JavaScript.ORDER_NONE];
  return code;
};
