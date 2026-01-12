import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_server_created_at';

const blockData = {
  message0: '%{BKY_SERVER_CREATED_AT}',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
    }
  ],
  colour: '#e07e6c',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  return [`moment(${server}.createdAt).format('LLLL')`, javascriptGenerator.ORDER_NONE];
};
