import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'new_regex';

const blockData = {
  message0: 'new regex %1',
  args0: [
    {
      type: 'input_value',
      name: 'REGEX',
      check: ['Number', 'String']
    }
  ],
  output: 'regex',
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
  let code = [`new Regex(${regex})`, JavaScript.ORDER_NONE];
  return code;
};
