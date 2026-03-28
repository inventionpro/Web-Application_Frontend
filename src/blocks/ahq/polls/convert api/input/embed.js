import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../../restrictions';
import { Types } from '../../../../types.js';

const blockName = 'convert_embed';
const blockData = {
  message0: 'Embed(s) %1',
  args0: [
    {
      type: 'input_value',
      name: 'buton',
      check: Types.String
    }
  ],
  colour: '#33cc00',
  output: 'AHQEmbeds',
  tooltip: 'Send embeds onto the message.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  return [javascriptGenerator.valueToCode(block, 'buton', javascriptGenerator.ORDER_NONE).replace("'", '').replace("'", ''), javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    message: 'RES_MISSING_AHQ_CONTENT',
    type: 'notempty',
    types: ['buton']
  }
]);
