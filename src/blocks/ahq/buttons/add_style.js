import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'style_ahq_button';

const blockData = {
  message0: 'set style %1 %2 %3 to button %4',
  inputsInline: true,
  args0: [
    {
      type: 'field_dropdown',
      name: 'Label',
      options: [
        ['Red', 'DANGER'],
        ['Purple', 'PRIMARY'],
        ['Grey', 'SECONDARY'],
        ['Green', 'SUCCESS'],
        ['Url', 'LINK']
      ]
    },
    {
      type: 'input_dummy'
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
JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE);
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = block.getFieldValue('Label');
  const code = `${finaln}.setStyle("${statementsThen}");`;
  return code;
};
