import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_modal_text';

const blockData = {
  message0: 'name %1 id %2 label %3 type %4',
  args0: [
    {
      type: 'field_input',
      name: 'name',
      text: 'modal'
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
      type: 'field_dropdown',
      name: 'type',
      options: [
        ['single line text box', 'SHORT'],
        ['multi line text box ', 'PARAGRAPH']
      ]
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#40BF4A',
  tooltip: 'adds a text box, can only be five of these',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const id = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
  const title = javascriptGenerator.valueToCode(block, 'title', javascriptGenerator.ORDER_ATOMIC);
  const type = javascriptGenerator.valueToCode(block, 'type', javascriptGenerator.ORDER_ATOMIC);
  return [
    `
const ${name} = new TextInputComponent()
    .setCostomId(${id})
    .setLable(${title})
    .setStyle('${type}')
`,
    javascriptGenerator.ORDER_NONE
  ];
};
