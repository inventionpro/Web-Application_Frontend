import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_file_extension';

const blockData = {
  message0: 'Extension of File %1',
  args0: [
    {
      type: 'input_value',
      name: 'fileName',
      check: ['String', 'var', 'Env']
    }
  ],
  output: 'String',
  colour: 45,
  tooltip: 'Grab the extension of a file and return it in lower case. Only works on files with an actual extension.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
//String(('input'.slice((('input'.lastIndexOf('.') + 1 + 1) - 1), 'input'.length).toLowerCase()))
JavaScript[blockName] = function (block) {
  // stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
  const fileName = JavaScript.valueToCode(block, 'fileName', JavaScript.ORDER_ATOMIC);
  const code = [`${fileName}.substring(${fileName}.lastIndexOf('.'))`, JavaScript.ORDER_NONE];
  return code;
};
//i have no idea if this block actually outputs the correct thing, too late though :troll:
