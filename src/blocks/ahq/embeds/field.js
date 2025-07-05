import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
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
JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE) || 'embed';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const ahq = JavaScript.valueToCode(block, 'image', JavaScript.ORDER_NONE) || "'null'";
  const code = `${finaln}.addField(${statementsThen}, ${ahq}, ${JavaScript.valueToCode(block, 'ahq', JavaScript.ORDER_NONE) || false});`;
  return code;
};
