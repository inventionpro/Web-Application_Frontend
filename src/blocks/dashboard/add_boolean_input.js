import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'add_boolean_input';

const blockData = (Blockly.Blocks['add_boolean_input'] = {
  type: 'add_boolean_input',
  message0: 'Add a boolean input %1 Set input title to %2 Set input description to %3 Set input ID to %4 %5 Set value setter %6 Set value getter %7',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'description',
      check: 'String'
    },
    {
      type: 'field_input',
      name: 'name',
      text: 'My_boolean_input'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'setter'
    },
    {
      type: 'input_value',
      name: 'getter'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 240,
  tooltip: '',
  helpUrl: ''
});

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['add_boolean_input'] = function (block) {
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var value_description = JavaScript.valueToCode(block, 'description', JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('name');
  text_name = text_name.replace(/ /g, '_');
  var statements_setter = JavaScript.statementToCode(block, 'setter');
  var value_getter = JavaScript.valueToCode(block, 'getter', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
    const setter_${text_name} = (discordClient, guild, value) => ${statements_setter}
    const getter_${text_name} = async(discordClient, guild) => {
        return ${value_getter || false}
    };

    s4d.client.dashboard.addBooleanInput(${value_name}, ${value_description}, setter_${text_name}, getter_${text_name});
`;
  return code;
};
