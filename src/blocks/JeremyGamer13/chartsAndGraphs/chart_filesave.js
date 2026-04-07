import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_saveGraph_file';
const blockData = {
  message0: 'Save graph as file named %1',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: Types.String
    }
  ],
  colour: 90,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Save the graph as an image using the file name you entered. Be careful with this though, this saves as an actual file on your bot!',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const fileName = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  return `line_chart_S4D_generated_992731990318.toFile(String(${fileName}));`;
};
