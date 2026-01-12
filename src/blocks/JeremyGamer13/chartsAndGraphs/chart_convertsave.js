import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_saveGraph_convert';

const blockData = {
  message0: 'Convert graph to %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['URL', 'toURL'],
        ['Data URI', 'toDataURI'],
        ['Buffer', 'toBuffer']
      ]
    }
  ],
  colour: 90,
  tooltip: 'Convert the graph to the data type selected. Note that some data types may not have blocks to turn them into an image again.',
  helpUrl: '',
  output: 'String'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('type');
  const code = [`line_chart_S4D_generated_992731990318.${type}()`, javascriptGenerator.ORDER_NONE];
  return code;
};
