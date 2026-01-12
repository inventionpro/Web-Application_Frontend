import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = (block) => {
  const code = [`(i.getTextInputValue(${javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_NONE)}))`, javascriptGenerator.ORDER_NONE];
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['id']
  }
]);
