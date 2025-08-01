import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
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
JavaScript[blockName] = function (block) {
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const server = JavaScript.valueToCode(block, 'Server', JavaScript.ORDER_ATOMIC);
  const des = JavaScript.valueToCode(block, 'args', JavaScript.ORDER_ATOMIC);
  const code = `s4d.client.application?.commands.create({
        name: ${server},
        description: ${des},
        options: [${statementThen}]        
    });`;
  return code;
};
