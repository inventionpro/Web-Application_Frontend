import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'label_ahq_button';
const blockData = {
  message0: 'set label %1 %2 to button %3',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: ['String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    }
  ],
  colour: '#33cc00',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE);
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const code = `${finaln}.setLabel(${statementsThen});`;
  return code;
};
