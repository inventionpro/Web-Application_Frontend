import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
const blockName = 'snd_ahq_modal';

const blockData = {
  message0: 'Send forms on reply type %1 form %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'Label',
      options: [
        ['Slash/AHQButtons', 'interaction'],
        ['Jose Buttons', 'i']
      ]
    },
    {
      type: 'input_value',
      name: 'form',
      check: 'ahq_modal_names'
    }
  ],
  colour: '#33cc00',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const name = block.getFieldValue('Label');
  const data = javascriptGenerator.valueToCode(block, 'form', javascriptGenerator.ORDER_NONE);
  const ahq = data.replace("'", '').replace("'", '');
  const code = `showModal(${ahq}, {
  client: s4d.client,
  interaction: ${name}
});`;
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['form']
  }
]);
