import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'fld_ahq_embed';

const blockData = {
  message0: 'Add Field name %1 description %2 inline %3 Embed %4',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'image',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'ahq',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    }
  ],
  colour: '#40BF4A',
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
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE) || 'embed';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const ahq = javascriptGenerator.valueToCode(block, 'image', javascriptGenerator.ORDER_NONE) || "'null'";
  const code = `${finaln}.addField(${statementsThen}, ${ahq}, ${javascriptGenerator.valueToCode(block, 'ahq', javascriptGenerator.ORDER_NONE) || false});`;
  return code;
};
