import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
Blockly.Blocks['jg_objects_create_new'] = {
  init: function () {
    this.jsonInit({
      message0: 'create empty object',
      colour: '#BA4A9A',
      args0: [],
      tooltip: 'Create a new empty object so that it can be used.',
      output: 'Object'
    });
  }
};

JavaScript['jg_objects_create_new'] = function () {
  const code = `new Object()`;
  return [code, JavaScript.ORDER_NONE];
};
Blockly.Blocks['jg_objects_set_key_to_value_in_object'] = {
  init: function () {
    this.jsonInit({
      message0: 'set key %1 to value %2 in object %3',
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: 'String'
        },
        {
          type: 'input_value',
          name: 'VALUE',
          check: null
        },
        {
          type: 'input_value',
          name: 'OBJECT',
          check: ['Object', null]
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
JavaScript['jg_objects_set_key_to_value_in_object'] = function (block) {
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  const object = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_ATOMIC);
  const code = `${object}[String(${key})] = ${value}
    `;
  return code;
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
          check: ['Object', null]
        }
      ],
      tooltip: 'Put an objects key names into a list.',
      output: ['Array', 'List']
    });
  }
};

JavaScript['jg_objects_get_objects_key_names_in_list'] = function (block) {
  const object = JavaScript.valueToCode(block, 'OBJECT', JavaScript.ORDER_ATOMIC);
  const code = `Object.getOwnPropertyNames(${object})`;
  return [code, JavaScript.ORDER_NONE];
};
