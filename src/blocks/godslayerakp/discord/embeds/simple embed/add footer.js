import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'gsa_set_simple_embed_footer';
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
  const icon_url = javascriptGenerator.valueToCode(block, 'icon_url', javascriptGenerator.ORDER_ATOMIC);
  const code = `footer: {
	text: String(${name}),
	icon_url: String(${icon_url}),
}, \n`;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};
