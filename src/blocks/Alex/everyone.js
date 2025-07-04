import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'everyn';

const blockData = {
  message0: 'Get everyone of server  %1',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  output: 'Everyone',
  colour: '#5BA58C',
  tooltip: 'Get everyone in a server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const code = [`(${server} || {}).id`, JavaScript.ORDER_NONE];
  return code;
};
