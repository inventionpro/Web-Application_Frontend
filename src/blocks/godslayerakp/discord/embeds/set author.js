import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'gsa_set_embed_author';
const blockData = {
  type: 'gsa_set_embed_author',
  message0: 'set embed author name %1 pfp %2 url %3',
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
    },
    {
      type: 'input_value',
      name: 'url',
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
  const url = JavaScript.valueToCode(block, 'url', JavaScript.ORDER_ATOMIC);
  const icon_url = JavaScript.valueToCode(block, 'icon_url', JavaScript.ORDER_ATOMIC);
  return `author: {
		name: String(${name}),
		icon_url: String(${icon_url}),
		url: String(${url}),
  },
`;
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "create embed with name () then" block!',
    types: ['gsa_create_embed']
  }
]);
