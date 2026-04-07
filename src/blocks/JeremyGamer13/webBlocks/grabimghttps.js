import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_imghttps';
const blockData = {
  message0: 'Fetch data from link %1 and save it as %2',
  args0: [
    {
      type: 'input_value',
      name: 'url',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'file',
      check: Types.String
    }
  ],
  colour: 230,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Grabs a file from a link. The link should end in an actual file extension, like .txt or .png. If this does not happen, then it will most likely send the HTML of the webpage.',
  helpUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const urlimg = javascriptGenerator.valueToCode(block, 'url', javascriptGenerator.ORDER_ATOMIC);
  const filename = javascriptGenerator.valueToCode(block, 'file', javascriptGenerator.ORDER_ATOMIC);
  return `await https.get(${urlimg}, async (res) => {
  res.pipe(fs.createWriteStream(${filename}));
});`;
};
