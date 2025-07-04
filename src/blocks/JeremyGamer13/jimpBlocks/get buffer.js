import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'gsa_get_jimp_image_buffer';

const blockData = {
  message0: 'get jimp image buffer with file type %3 then do %2 %1',
  args0: [
    {
      type: 'input_statement',
      name: 'then'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'field_dropdown',
      name: 'mimeType',
      options: [
        ['png', 'MIME_PNG'],
        ['jpeg', 'MIME_JPEG'],
        ['bmp', 'MIME_BMP']
      ]
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'gets the buffer form of the jimp image',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const type = block.getFieldValue('mimeType');
  const then = JavaScript.statementToCode(block, 'then');
  const code = `image.getBuffer(jimp.${type}, async (err, buffer) => {
    ${then}
});
`;
  return code;
};

Blockly.Blocks[blockName + '_value'] = {
  init: function () {
    this.jsonInit({
      message0: 'image buffer',
      colour: 260,
      output: 'buffer',
      tooltip: 'retruns the image buffer that is retrieved by "get jimp image buffer"',
      helpUrl: ''
    });
  }
};

JavaScript[blockName + '_value'] = function () {
  const code = [`buffer`, JavaScript.ORDER_ATOMIC];
  return code;
};
