import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_get_bot';
const blockData = {
  message0: '%{BKY_GET_BOT}',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: Types.Server
    }
  ],
  colour: '#5b67a5',
  output: Types.Member,
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
  return [`${server}.members.cache.get(s4d.client.user.id)`, javascriptGenerator.ORDER_NONE];
};
