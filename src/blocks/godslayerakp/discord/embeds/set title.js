import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'gsa_set_embed_title';
const blockData = {
  type: 'gsa_set_embed_title',
  message0: 'set embed title %1 url %2',
  args0: [
    {
      type: 'input_value',
      name: 'title',
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
  inputsInline: true,
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
  const color = JavaScript.valueToCode(block, 'title', JavaScript.ORDER_ATOMIC);
  const url = JavaScript.valueToCode(block, 'url', JavaScript.ORDER_ATOMIC);
  return `title: String(${color}),
url: String(${url}),
`;
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "create embed with name () then" block!',
    types: ['gsa_create_embed']
  }
]);
