import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 'make_ahq_modal';
const blockData = {
  message0: 'Make A Form with name %1 Title %2 Id %3 Then %4',
  args0: [
    {
      type: 'input_value',
      name: 'button name',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'title',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'id',
      check: Types.String
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
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
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE) || 'modal';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = javascriptGenerator.statementToCode(block, 'STATEMENTS', javascriptGenerator.ORDER_ATOMIC);
  return `let ${finaln} = new Modal()
  .setCustomId(${javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_NONE)})
  .setTitle(${javascriptGenerator.valueToCode(block, 'title', javascriptGenerator.ORDER_NONE)})
  .addComponents(${statementsThen});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['button name', 'id', 'title', 'STATEMENTS']
  }
]);
