import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_graph_line';

const blockData = {
  message0: 'Create line graph with data: %1 List of bottom labels %2',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['Number', 'String', 'var', 'Env']
    }
  ],
  colour: 90,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Create a line graph image with the input data.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const fileName = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);
  const code = `line_chart_S4D_generated_992731990318.toFile(String(${fileName}));\n`;
  return code;
};
