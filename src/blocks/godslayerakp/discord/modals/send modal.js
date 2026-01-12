import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_modal_send';

const blockData = {
  message0: 'send name %1 textboxes %2',
  args0: [
    {
      type: 'field_input',
      name: 'name',
      text: 'modal'
    },
    {
      type: 'field_input',
      name: 'inputs',
      text: 'put ", " in-between each name'
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const inputs = javascriptGenerator.valueToCode(block, 'inputs', javascriptGenerator.ORDER_ATOMIC);
  return `
  modal.addComponents(${name});
  await interaction.showModal(${inputs});
`;
};
