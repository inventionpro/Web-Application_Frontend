import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'gsa_jg_create_role_with_name_in_server_with_color_then_do';

const blockData = {
  message0: 'create role with name %1 in server %2 with color %3 then %4 do %5',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'SERVER',
      check: ['Server']
    },
    {
      type: 'input_value',
      name: 'COLOR',
      check: 'Colour'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ],
  colour: '#2EB66B',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  tooltip: 'Creates a role in a server with the specified name and color, then runs the blocks inside.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  const color = JavaScript.valueToCode(block, 'COLOR', JavaScript.ORDER_ATOMIC);
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  const code = `${server}.roles.create({ name: ${name},color:${color} }).then(async s4d_create_role_then_role => {
    ${statements}
})
`;
  return code;
};
