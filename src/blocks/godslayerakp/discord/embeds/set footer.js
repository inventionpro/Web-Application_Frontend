import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'gsa_set_embed_footer';
const blockData = {
  message0: 'set footer text %1 icon %2',
  args0: [
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'icon_url',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  colour: 120,
  tooltip: 'must be in a make embed with name block',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const icon_url = JavaScript.valueToCode(block, 'icon_url', JavaScript.ORDER_ATOMIC);
  return `footer: {
	text: String(${name}),
	icon_url: String(${icon_url}),
},`;
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "create embed with name () then" block!',
    types: ['gsa_create_embed']
  }
]);
