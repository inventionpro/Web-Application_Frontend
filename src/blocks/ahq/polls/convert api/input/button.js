import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../../restrictions';
const blockName = 'convert_button';

const blockData = {
  message0: 'Button(s) %1',
  args0: [
    {
      type: 'input_value',
      name: 'buton',
      check: 'String'
    }
  ],
  colour: '#33cc00',
  output: 'AHQButton',
  tooltip: 'Send buttons onto the message.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = [JavaScript.valueToCode(block, 'buton', JavaScript.ORDER_NONE).replace("'", '').replace("'", ''), JavaScript.ORDER_NONE];
  return code;
};
registerRestrictions(blockName, [
  {
    message: 'RES_MISSING_AHQ_CONTENT',
    type: 'notempty',
    types: ['buton']
  }
]);
