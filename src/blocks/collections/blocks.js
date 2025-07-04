import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockColor = '#a354b3';
Blockly.Blocks['collections_create_new_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'create empty collection',
      inputsInline: true,
      args0: [],
      colour: blockColor,
      output: 'Collection',
      tooltip: 'Create a new empty collection.',
      helpUrl: ''
    });
  }
};

JavaScript['collections_create_new_collection'] = function () {
  return [`new Map()`, JavaScript.ORDER_NONE];
};
Blockly.Blocks['collections_get_from_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'get key %1 from collection %2',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: ['String', 'Var', 'var', 'Env']
        },
        {
          type: 'input_value',
          name: 'MAP',
          check: ['Collection', 'Var', 'var']
        }
      ],
      colour: blockColor,
      output: null,
      tooltip: "Get a value using it's key in the collection.",
      helpUrl: ''
    });
  }
};

JavaScript['collections_get_from_collection'] = function (block) {
  const map = JavaScript.valueToCode(block, 'MAP', JavaScript.ORDER_ATOMIC);
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  return [`${map}.get(String(${key}))`, JavaScript.ORDER_NONE];
};

Blockly.Blocks['collections_set_to_key_in_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'set %1 to key %2 in collection %3',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: null
        },
        {
          type: 'input_value',
          name: 'KEY',
          check: ['String', 'Var', 'var', 'Env']
        },
        {
          type: 'input_value',
          name: 'MAP',
          check: ['Collection', 'Var', 'var']
        }
      ],
      colour: blockColor,
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Set a value in a key in the collection.',
      helpUrl: ''
    });
  }
};

JavaScript['collections_set_to_key_in_collection'] = function (block) {
  const map = JavaScript.valueToCode(block, 'MAP', JavaScript.ORDER_ATOMIC);
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_ATOMIC);
  return `${map}.set(String(${key}), ${value})
    `;
};

Blockly.Blocks['collections_size_of_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'size of collection %1',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MAP',
          check: ['Collection', 'Var', 'var']
        }
      ],
      colour: blockColor,
      output: 'Number',
      tooltip: 'Get the amount of things in the collection.',
      helpUrl: ''
    });
  }
};

JavaScript['collections_size_of_collection'] = function (block) {
  const map = JavaScript.valueToCode(block, 'MAP', JavaScript.ORDER_ATOMIC);
  return [`${map}.size`, JavaScript.ORDER_NONE];
};

Blockly.Blocks['collections_remove_key_in_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'remove key %1 in collection %2',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: ['String', 'Var', 'var', 'Env']
        },
        {
          type: 'input_value',
          name: 'MAP',
          check: ['Collection', 'Var', 'var']
        }
      ],
      colour: blockColor,
      previousStatement: null,
      nextStatement: null,
      tooltip: "Remove a key and it's value from a collection.",
      helpUrl: ''
    });
  }
};

JavaScript['collections_remove_key_in_collection'] = function (block) {
  const map = JavaScript.valueToCode(block, 'MAP', JavaScript.ORDER_ATOMIC);
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  return `${map}.delete(String(${key}))
    `;
};
Blockly.Blocks['collections_clear_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'clear collection %1',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MAP',
          check: ['Collection', 'Var', 'var']
        }
      ],
      colour: blockColor,
      previousStatement: null,
      nextStatement: null,
      tooltip: 'Clear the entire collection.',
      helpUrl: ''
    });
  }
};

JavaScript['collections_clear_collection'] = function (block) {
  const map = JavaScript.valueToCode(block, 'MAP', JavaScript.ORDER_ATOMIC);
  return `${map}.clear()
    `;
};

Blockly.Blocks['collections_collection_has_key'] = {
  init: function () {
    this.jsonInit({
      message0: 'collection %1 has key %2?',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'MAP',
          check: ['Collection', 'Var', 'var']
        },
        {
          type: 'input_value',
          name: 'KEY',
          check: ['String', 'Var', 'var', 'Env']
        }
      ],
      colour: blockColor,
      output: 'Boolean',
      tooltip: 'Checks if a collection has a key.',
      helpUrl: ''
    });
  }
};

JavaScript['collections_collection_has_key'] = function (block) {
  const map = JavaScript.valueToCode(block, 'MAP', JavaScript.ORDER_ATOMIC);
  const key = JavaScript.valueToCode(block, 'KEY', JavaScript.ORDER_ATOMIC);
  return [`${map}.has(String(${key}))`, JavaScript.ORDER_NONE];
};

// database
// database can only have array or object
// that is stupid fart
// so i fix it : )
// yayyaa
// colletcton forever
// :)
// yoy

Blockly.Blocks['jg_collections_convert_database_collection_to_collection'] = {
  init: function () {
    this.jsonInit({
      message0: 'convert database collection %1 to collection',
      inputsInline: true,
      args0: [
        {
          type: 'input_value',
          name: 'DBCOLLECT',
          check: ['Object', 'Var', 'var', 'DatabaseValue']
        }
      ],
      colour: blockColor,
      output: null,
      tooltip: "Get a value using it's key in the collection.",
      helpUrl: ''
    });
  }
};

JavaScript['jg_collections_convert_database_collection_to_collection'] = function (block) {
  const db = JavaScript.valueToCode(block, 'DBCOLLECT', JavaScript.ORDER_ATOMIC);
  return [`new Map(Object.entries(${db}))`, JavaScript.ORDER_NONE];
};
