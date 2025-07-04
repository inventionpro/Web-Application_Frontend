import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'add_boolean_dash';

const blockData = {
  type: 'block_type',
  message0: 'add boolean (selector) input %1 name %2 %3 description %4 %5 setter %6 %7 get %8',
  args0: [
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'desc',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_statement',
      name: 'set'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'getter',
      check: 'String'
    }
  ],
  colour: '#0EB22B',
  tooltip: 'Returns either true/false',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = `s4d.client.dashboard.addSelectorInput(${JavaScript.valueToCode(block, 'name', JavaScript.ORDER_NONE)}, ${JavaScript.valueToCode(block, 'desc', JavaScript.ORDER_NONE)}, async function(client, guild, value) {${JavaScript.statementToCode(block, 'set')}}, async function(client, guild) {
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
