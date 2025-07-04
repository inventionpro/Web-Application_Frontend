import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'first_channel';

const blockData = {
  message0: 'Get the first channel of server %1',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  output: 'Channel',
  colour: '#ff6f00',
  tooltip: 'Gets the first channel of a server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const code = [`${server}.channels.cache.first()`, JavaScript.ORDER_NONE];
  return code;
};
