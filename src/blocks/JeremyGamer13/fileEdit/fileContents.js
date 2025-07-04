import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_file_contents';

const blockData = {
  message0: 'Contents of File %1',
  args0: [
    {
      type: 'input_value',
      name: 'fileName',
      check: ['String', 'var', 'Env']
    }
  ],
  output: 'String',
  colour: 45,
  tooltip: 'Get the contents of a file with the matching file name and extension.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  // stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
  const fileName = JavaScript.valueToCode(block, 'fileName', JavaScript.ORDER_ATOMIC);
  const code = [`fs.readFileSync(` + fileName + `, 'utf8')`, JavaScript.ORDER_NONE];
  return code;
};
