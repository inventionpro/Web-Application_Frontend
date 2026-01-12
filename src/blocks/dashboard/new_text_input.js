import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'add_text_input';

const blockData = {
  type: 'add_text_input',
  message0: 'Add a text input %1 Set input title to %2 Set input description to %3 Set input ID to %4 %5 Set validator %6 Set value setter %7 Set value getter %8 Default value getter value %9',
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
      text: 'My_text_input'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'validator'
    },
    {
      type: 'input_statement',
      name: 'setter'
    },
    {
      type: 'input_value',
      name: 'getter'
    },
    {
      type: 'input_value',
      name: 'gett_def',
      check: 'String'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },

  validate: function (value) {
    return value.replace(/ /g, '_');
  }
};

javascriptGenerator.forBlock['add_text_input'] = (block) => {
  var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  var value_description = javascriptGenerator.valueToCode(block, 'description', javascriptGenerator.ORDER_ATOMIC);
  var text_name = block.getFieldValue('name');
  text_name = text_name.replace(/ /g, '_');
  var value_validator = javascriptGenerator.valueToCode(block, 'validator', javascriptGenerator.ORDER_ATOMIC);
  var statements_setter = javascriptGenerator.statementToCode(block, 'setter');
  var value_getter = javascriptGenerator.valueToCode(block, 'getter', javascriptGenerator.ORDER_ATOMIC);
  var value_gett_def = javascriptGenerator.valueToCode(block, 'gett_def', javascriptGenerator.ORDER_ATOMIC);
  var code = `
    const validator_${text_name} = value => ${value_validator};
    const setter_${text_name} = (discordClient, guild, value) => ${statements_setter}
    const getter_${text_name} = async(discordClient, guild) => {
        ${value_getter} || ${value_gett_def};
    }

    s4d.client.dashboard.addTextInput(${value_name}, ${value_description}, validator_${text_name}, setter_${text_name}, getter_${text_name});
`;
  return code;
};
