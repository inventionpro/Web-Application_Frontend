import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'parham_slash_interactionmember';

const blockData = {
  message0: 'Interaction Member',
  output: 'Member',
  colour: '#187795',
  tooltip: 'This Block Very Like "Interaction Author" Block But You Can Do Role Actions, Ban & Other Server Actions',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  var code = '((interaction.guild).members.cache.get(((interaction.member.user).id)) || await (interaction.guild).members.fetch(((interaction.member.user).id))).user';
  return [code, JavaScript.ORDER_NONE];
};
