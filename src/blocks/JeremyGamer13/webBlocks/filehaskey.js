import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_web_haskey';

const blockData = {
  message0: 'Data file has key %1?',
  args0: [
    {
      type: 'input_value',
      name: 'key',
      check: ['String', 'var', 'Env', 'Number']
    }
  ],
  output: 'Boolean',
  colour: 230,
  tooltip: 'Checks if a key exists in the current data file.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  // stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
  const key = JavaScript.valueToCode(block, 'key', JavaScript.ORDER_ATOMIC);
  const code = [`(JSONdataS4D.hasOwnProperty(` + key + `)) == true`, JavaScript.ORDER_NONE];
  return code;
};
