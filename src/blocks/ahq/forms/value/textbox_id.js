import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 'id_textbox_ahq';
const blockData = {
  message0: 'TextBox Value; Id: %1',
  args0: [
    {
      type: 'input_value',
      name: 'id',
      check: Types.String
    }
  ],
  colour: '#33cc00',
  output: Types.String,
  tooltip: 'The text entered in the textbox with the ID specified.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  return [`(i.getTextInputValue(${javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_NONE)}))`, javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['id']
  }
]);
