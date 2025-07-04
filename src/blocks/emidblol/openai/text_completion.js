import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'text_completion_openai';

const blockData = {
  message0: 'Complete text with prompt %1 with engine %2',
  args0: [
    {
      type: 'input_value',
      name: 'PROMPT',
      check: ['String', 'Env']
    },
    {
      type: 'field_dropdown',
      name: 'MODEL',
      options: [
        ['davinci', 'text-davinci-002'],
        ['curie', 'text-curie-001'],
        ['babbage', 'text-babbage-001'],
        ['ada', 'text-ada-001']
      ]
    }
  ],
  output: 'String',
  colour: '#FF8C1A',
  tooltip: "Use OpenAI's GPT-3 to complete a text based on a prompt.",
  helpUrl: ''
};

//if the openai_login block is not present, the user will not be able to use this block
registerRestrictions(blockName, [
  {
    type: 'block',
    message: 'Login block missing.',
    types: ['openai_login']
  },
  {
    type: 'notempty',
    message: 'Prompt cannot be empty.',
    types: ['PROMPT']
  }
]);

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const prompt = JavaScript.valueToCode(block, 'PROMPT', JavaScript.ORDER_ATOMIC);
  const code = `await openai.createCompletion({
        prompt: ${prompt},
        model: "${block.getFieldValue('MODEL')}",
        max_tokens: 16,
        temperature: 1
    }).then((response) => {
        return response.data.choices[0].text;
        })`;
  return [code, JavaScript.ORDER_NONE];
};
