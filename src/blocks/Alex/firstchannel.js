import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  const code = [`${server}.channels.cache.first()`, javascriptGenerator.ORDER_NONE];
  return code;
};
