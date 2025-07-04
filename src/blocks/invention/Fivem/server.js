import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'inv_fivem_server';

const blockData = {
  message0: 'Connect to fivem server %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var code = `const __S4D__fivem_server = new __S4D__fivem.DiscordFivemApi(${value_name})`;
  return code;
};
