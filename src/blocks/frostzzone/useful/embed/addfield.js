import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
import { Types } from '../../../types.js';

const blockName = 'frost_add_field';
const blockData = {
  message0: 'Add field %1 Title %2 Description %3 Inline %4',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'TITLE',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'DESCRIPTION',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'INLINE',
      check: Types.Boolean
    }
  ],
  colour: '#40BF4A',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const fielddescription = javascriptGenerator.valueToCode(block, 'DESCRIPTION', javascriptGenerator.ORDER_ATOMIC);
  const fieldtitle = javascriptGenerator.valueToCode(block, 'TITLE', javascriptGenerator.ORDER_ATOMIC);
  const inline = javascriptGenerator.valueToCode(block, 'INLINE', javascriptGenerator.ORDER_ATOMIC);
  return `{ name: String(${fieldtitle}), value: String(${fielddescription}), inline: ${inline} },`;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'FROST_RES_MUST_BE_CREATE_FIELD',
    types: ['frost_create_field']
  }
]);
