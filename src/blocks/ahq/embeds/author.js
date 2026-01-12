import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'author_ahq_embed';

const blockData = {
  message0: 'Set author %1 image %2 Embed %3',
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
  let extra = '';
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE) || 'embed';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const ahq = javascriptGenerator.valueToCode(block, 'image', javascriptGenerator.ORDER_NONE) || null;
  if (ahq !== null) {
    extra = `, ${ahq}`;
  }
  const code = `${finaln}.setAuthor(${statementsThen}${extra});`;
  return code;
};
