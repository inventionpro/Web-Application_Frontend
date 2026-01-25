import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 's4d_reg_slash';

const blockData = {
  message0: 'Register slash command name %1 set description %2 then %3',
  args0: [
    {
      type: 'input_value',
      name: 'Server',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'args',
      check: 'String'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#33cc00',
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
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  const server = javascriptGenerator.valueToCode(block, 'Server', javascriptGenerator.ORDER_ATOMIC);
  const des = javascriptGenerator.valueToCode(block, 'args', javascriptGenerator.ORDER_ATOMIC);
  const code = `s4d.client.application?.commands.create({
  name: ${server},
  description: ${des},
  options: [${statementThen}]
});`;
  return code;
};
