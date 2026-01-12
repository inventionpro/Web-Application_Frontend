import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'login_openai';

const blockData = {
  type: 'openai_login',
  message0: 'Login to openai with key:  %1',
  args0: [
    {
      type: 'input_value',
      name: 'token',
      check: ['String', 'Env']
    }
  ],
  colour: 230,
  tooltip: '',
  helpUrl: ''
};
//if this block is not present, the user will not be able to use the OpenAI blocks
registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'Please provide a valid OpenAI key or environment variable.',
    types: ['token']
  }
]);

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'token', javascriptGenerator.ORDER_ATOMIC);
  const code = `
        const openai = new OpenAI({
            apiKey: ${key},
        });
    `;
  return code;
};
