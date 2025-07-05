import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
const blockName = 'make_ahq_modal';

const blockData = {
  message0: 'Make A Form with name %1 Title %2 Id %3 Then %4',
  args0: [
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'title',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'id',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE) || 'modal';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = JavaScript.statementToCode(block, 'STATEMENTS', JavaScript.ORDER_ATOMIC);
  const code = `let ${finaln} = new Modal()
    .setCustomId(${JavaScript.valueToCode(block, 'id', JavaScript.ORDER_NONE)})
    .setTitle(${JavaScript.valueToCode(block, 'title', JavaScript.ORDER_NONE)})
    .addComponents(\n${statementsThen});`;
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['button name', 'id', 'title', 'STATEMENTS']
  }
]);
