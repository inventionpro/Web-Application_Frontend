import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_get_msg_then';
const blockData = {
  message0: '%{BKY_GET_MESSAGE_BY_ID}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: Types.Channel
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  return `${channel}.messages.fetch(${id}).then(async (s4dmessage) =>{
${statementThen}
});`;
};
