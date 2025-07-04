import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'generate_image_openai';

const blockData = {
  message0: 'Generate image with prompt %1 with key %2',
  args0: [
    {
      type: 'input_value',
      name: 'PROMPT',
      check: ['String', 'Env']
    },
    //dropdown with all the sizes
    {
      type: 'field_dropdown',
      name: 'SIZE',
      options: [
        ['256x256', '256x256'],
        ['512x512', '512x512'],
        ['1024x1024', '1024x1024']
      ]
    }
  ],
  output: 'Image',
  colour: '#FF8C1A',
  tooltip: "Use OpenAI's GPT-3 to generate an image based on a prompt.",
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
  const size = block.getFieldValue('SIZE');
  const code = `await openai.createImage({
        prompt: ${prompt},
        n: 1,
        size: "${size}",
        response_format: "b64_json"
      }).then((response) => {
        const imageb64 = response.data.data[0].b64_json;
        const image = Buffer.from(imageb64, "base64");
        return image;
        })
      `;
  return [code, JavaScript.ORDER_NONE];
};
