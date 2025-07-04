import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'id_textbox_ahq';

const blockData = {
  message0: 'TextBox Value; Id: %1',
  args0: [
    {
      type: 'input_value',
      name: 'id',
      check: 'String'
    }
  ],
  colour: '#33cc00',
  output: 'String',
  tooltip: 'The text entered in the textbox with the ID specified.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = [`(i.getTextInputValue(${JavaScript.valueToCode(block, 'id', JavaScript.ORDER_NONE)}))`, JavaScript.ORDER_NONE];
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['id']
  }
]);
