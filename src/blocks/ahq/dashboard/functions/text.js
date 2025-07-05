import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'add_text_dash';

const blockData = {
  type: 'block_type',
  message0: 'Add text input %1 Name %2 Description %3 max length %4 Setter %5 get value %6',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'desc',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'length',
      check: 'Number'
    },
    {
      type: 'input_statement',
      name: 'set'
    },
    {
      type: 'input_value',
      name: 'getter',
      check: 'String'
    }
  ],
  colour: '#0EB22B',
  tooltip: 'Returns Text',
  helpUrl: '',
  inputsInline: false
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = `s4d.client.dashboard.addTextInput(${JavaScript.valueToCode(block, 'name', JavaScript.ORDER_NONE)}, ${JavaScript.valueToCode(block, 'desc', JavaScript.ORDER_NONE)}, function(prefix) {
        return (prefix.length <= ${JavaScript.valueToCode(block, 'length', JavaScript.ORDER_NONE)})
    }, async function(client, guild, value) {${JavaScript.statementToCode(block, 'set')}}, async function(client, guild) {
        await delay(200);
        return (${JavaScript.valueToCode(block, 'getter', JavaScript.ORDER_NONE)})
    });`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['name', 'desc', 'set', 'length', 'getter']
  }
]);
