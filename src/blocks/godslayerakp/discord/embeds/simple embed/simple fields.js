import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../../../restrictions';
const blockName = 'gsa_simple_field';
const blockData = {
  type: 'gsa_simple_field',
  message0: 'add field with title %1 description %2 inline? %3',
  args0: [
    {
      type: 'input_value',
      name: 'title',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'description',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'inline',
      check: 'Boolean'
    }
  ],
  previousStatement: 'simple_field',
  nextStatement: 'simple_field',
  colour: '#40BF4A',
  tooltip: 'must be in a add fields block',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const title = JavaScript.valueToCode(block, 'title', JavaScript.ORDER_ATOMIC);
  const description = JavaScript.valueToCode(block, 'description', JavaScript.ORDER_ATOMIC);
  const inline = JavaScript.valueToCode(block, 'inline', JavaScript.ORDER_ATOMIC);
  return `{
	name: ${title},
	value: ${description},
	inline: ${inline},
},
`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "add fields" block!',
    types: ['gsa_simple_embed']
  }
]);
