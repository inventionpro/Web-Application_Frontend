import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'gsa_modal_create';

const blockData = {
  message0: 'name %1 %2 id %3 title %4 %5',
  args0: [
    {
      type: 'field_input',
      name: 'name',
      text: 'modal'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'id',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'title',
      check: 'String'
    },
    {
      type: 'input_statement',
      name: 'beep'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#40BF4A',
  tooltip: 'makes a form menu',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const id = JavaScript.valueToCode(block, 'id', JavaScript.ORDER_ATOMIC);
  const title = JavaScript.valueToCode(block, 'title', JavaScript.ORDER_ATOMIC);
  const beep = JavaScript.valueToCode(block, 'beep', JavaScript.ORDER_ATOMIC);
  return `
const ${name} = new modal()
    .setCostomId(${id})
    .setTitle(${title})
${beep}
`;
};
