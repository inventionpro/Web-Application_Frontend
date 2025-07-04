import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'test_regex';

const blockData = {
  message0: 'test regex %1 with %2',
  args0: [
    {
      type: 'input_value',
      name: 'REGEX',
      check: 'regex'
    },
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String'
    }
  ],
  output: 'Boolean',
  colour: '#5ba58b',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const regex = JavaScript.valueToCode(block, 'REGEX', JavaScript.ORDER_ATOMIC);
  const string = JavaScript.valueToCode(block, 'TEXT', JavaScript.ORDER_ATOMIC);
  let code = [`${regex}.test(${string})`, JavaScript.ORDER_NONE];
  return code;
};
