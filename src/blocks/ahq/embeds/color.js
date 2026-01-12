import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'color_ahq_embed';

const blockData = {
  message0: 'Set Colour %1 Embed %2',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: ['String', 'Colour']
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
  const code = `${finaln}.setColor(${statementsThen});`;
  return code;
};
