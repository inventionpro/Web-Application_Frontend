import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 's4d_login';

const blockData = {
  type: 'block_type',
  message0: '%{BKY_LOGIN}',
  args0: [
    {
      type: 'input_value',
      name: 'TOKEN',
      check: ['String', 'Env']
    }
  ],
  colour: '#3333ff',
  tooltip: '%{BKY_LOGIN_TOOLTIP}',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const value = javascriptGenerator.valueToCode(block, 'TOKEN', javascriptGenerator.ORDER_ATOMIC);
  const code = `await s4d.client.login(${value}).catch((err) => {
  const tokenInvalid = true;
  const tokenError = err;
  let error = err.toString().toLowerCase();
  if (error.includes('invalid token')) {
    throw new Error('An invalid bot token was provided!');
  } else if (error.includes('disallowed intents')) {
    throw new Error('Privileged Gateway Intents are not enabled! Please go to https://discord.dev and turn on all of them.');
  } else {
    throw err;
  }
});\n`;
  return code;
};
