import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_file_metadata';

const blockData = {
  message0: 'Metadata of File %1',
  args0: [
    {
      type: 'input_value',
      name: 'file',
      check: ['String', 'var', 'Env']
    }
  ],
  output: 'String',
  colour: 45,
  tooltip: "Get the metadata of a file, like it's size in bytes and timestamp of it's creation.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const file = javascriptGenerator.valueToCode(block, 'file', javascriptGenerator.ORDER_ATOMIC);
  const code = [`JSON.stringify(fs.statSync(` + file + `))`, javascriptGenerator.ORDER_NONE];
  return code;
};
