import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  const code = [`(${server} || {}).id`, javascriptGenerator.ORDER_NONE];
  return code;
};
