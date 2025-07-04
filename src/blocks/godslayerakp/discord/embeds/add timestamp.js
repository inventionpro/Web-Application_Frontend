import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'gsa_set_embed_timestamp';
const blockData = {
  type: 'gsa_set_embed_timestamp',
  message0: 'add embed timestamp %1',
  args0: [
    {
      type: 'input_value',
      name: 'date',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  colour: 120,
  tooltip: 'the number you put must be unix',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const date = JavaScript.valueToCode(block, 'date', JavaScript.ORDER_ATOMIC);
  if (JavaScript.valueToCode(block, 'date', JavaScript.ORDER_ATOMIC) === null) {
    return `timestamp: new Date(),
    `;
  } else {
    return `timestamp: new Date(${date}),
    `;
  }
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$This block needs to be placed in a "create embed with name () then" block!',
    types: ['gsa_create_embed']
  }
]);
