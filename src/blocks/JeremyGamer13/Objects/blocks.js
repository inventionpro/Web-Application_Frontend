import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

Blockly.Blocks['jg_objects_create_new'] = {
  init: function () {
    this.jsonInit({
      message0: 'create empty object',
      colour: '#BA4A9A',
      args0: [],
      tooltip: 'Create a new empty object so that it can be used.',
      output: Types.Object
    });
  }
};

javascriptGenerator.forBlock['jg_objects_create_new'] = function () {
  return [`new Object()`, javascriptGenerator.ORDER_NONE];
};
Blockly.Blocks['jg_objects_set_key_to_value_in_object'] = {
  init: function () {
    this.jsonInit({
      message0: 'set key %1 to value %2 in object %3',
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: Types.String
        },
        {
          type: 'input_value',
          name: 'VALUE',
          check: Types.Any
        },
        {
          type: 'input_value',
          name: 'OBJECT',
          check: Types.Object
        }
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#BA4A9A',
      tooltip: 'Set a key in an object to any value.',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['jg_objects_set_key_to_value_in_object'] = (block) => {
  const key = javascriptGenerator.valueToCode(block, 'KEY', javascriptGenerator.ORDER_ATOMIC);
  const value = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
  const object = javascriptGenerator.valueToCode(block, 'OBJECT', javascriptGenerator.ORDER_ATOMIC);
  return `${object}[String(${key})] = ${value}`;
};

Blockly.Blocks['jg_objects_get_objects_key_names_in_list'] = {
  init: function () {
    this.jsonInit({
      message0: 'get objects %1 key names in list',
      colour: '#BA4A9A',
      args0: [
        {
          type: 'input_value',
          name: 'OBJECT',
          check: Types.Object
        }
      ],
      tooltip: 'Put an objects key names into a list.',
      output: Types.Array
    });
  }
};

javascriptGenerator.forBlock['jg_objects_get_objects_key_names_in_list'] = (block) => {
  const object = javascriptGenerator.valueToCode(block, 'OBJECT', javascriptGenerator.ORDER_ATOMIC);
  return [`Object.getOwnPropertyNames(${object})`, javascriptGenerator.ORDER_NONE];
};
