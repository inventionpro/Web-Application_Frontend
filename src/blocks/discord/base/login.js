import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
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

JavaScript[blockName] = function (block) {
  const value = JavaScript.valueToCode(block, 'TOKEN', JavaScript.ORDER_ATOMIC);
  const code = `await s4d.client.login(${value}).catch((e) => { 
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });\n`;
  return code;
};
