import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_fivem_server';
const blockData = {
  message0: 'Connect to fivem server %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  colour: '#CC8899',
  tooltip: 'Connects to a fivem server',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return `const __S4D__fivem_server = new __S4D__fivem.DiscordFivemApi(${value_name})`;
};
