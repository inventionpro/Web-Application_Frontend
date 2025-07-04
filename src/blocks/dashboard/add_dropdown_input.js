import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'add_dropdown_input';

const blockData = {
  type: 'add_dropdown_input',
  message0: 'Add a selector input %1 Set input title to %2 Set input description to %3 Set input ID to %4 %5 Set value setter %6 Set value getter ID %7 Set value getter NAME %8 Get Selector Entries %9',
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
      text: 'My_selector_input'
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
      name: 'getter_id'
    },
    {
      type: 'input_value',
      name: 'getter_name'
    },
    {
      type: 'input_value',
      name: 'selector_entries',
      check: 'Array'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 245,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['add_dropdown_input'] = function (block) {
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var value_description = JavaScript.valueToCode(block, 'description', JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('name');
  text_name = text_name.replace(/ /g, '_');
  var statements_setter = JavaScript.statementToCode(block, 'setter');
  var value_getter_id = JavaScript.valueToCode(block, 'getter_id', JavaScript.ORDER_ATOMIC);
  var value_getter_name = JavaScript.valueToCode(block, 'getter_name', JavaScript.ORDER_ATOMIC);
  var value_selector_entries = JavaScript.valueToCode(block, 'selector_entries', JavaScript.ORDER_ATOMIC);
  var code = `
    const ${text_name}_getSelectorEntries = (client, guild) => ${value_selector_entries};
    const setter_${text_name} = (client, guild, value) => ${statements_setter}
    const getter_${text_name} = async(client, guild) => {
        const getter_${text_name}_ID = ${value_getter_id};
        const getter_${text_name}_NAME = ${value_getter_name};
        return [getter_${text_name}_ID, getter_${text_name}_NAME];
};

s4d.client.dashboard.addSelector(${value_name}, ${value_description}, ${text_name}_getSelectorEntries, setter_${text_name}, getter_${text_name});
`;
  return code;
};
