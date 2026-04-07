import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_file_contents';
const blockData = {
  message0: 'Contents of File %1',
  args0: [
    {
      type: 'input_value',
      name: 'fileName',
      check: Types.String
    }
  ],
  output: Types.String,
  colour: 45,
  tooltip: 'Get the contents of a file with the matching file name and extension.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  // stuff    return 'fs.readFileSync(' + fileName + `, 'utf8')`;
  const fileName = javascriptGenerator.valueToCode(block, 'fileName', javascriptGenerator.ORDER_ATOMIC);
  return ['fs.readFileSync(' + fileName + `, 'utf8')`, javascriptGenerator.ORDER_NONE];
};
