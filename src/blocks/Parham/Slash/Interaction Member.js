import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'parham_slash_interactionmember';
const blockData = {
  message0: 'Interaction Member',
  output: Types.Member,
  colour: '#187795',
  tooltip: 'This Block Very Like "Interaction Author" Block But You Can Do Role Actions, Ban & Other Server Actions',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['interaction.member', javascriptGenerator.ORDER_NONE];
};
