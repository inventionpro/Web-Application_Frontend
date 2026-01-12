import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'gsa_set_simple_embed_author';
const blockData = {
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
  output: blockName,
  inputsInline: false,
  colour: '#40BF4A',
  tooltip: 'must be in a make embed with name block',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const url = javascriptGenerator.valueToCode(block, 'url', javascriptGenerator.ORDER_ATOMIC);
  const icon_url = javascriptGenerator.valueToCode(block, 'icon_url', javascriptGenerator.ORDER_ATOMIC);
  const code = `author: {
		name: String(${name}),
		icon_url: String(${icon_url}),
		url: String(${url}),
  }, 
`;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};
