import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'add_color_dash';

const blockData = {
  type: 'block_type',
  message0: 'add colour input %1 name %2 description %3 setter %4 get %5',
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
  tooltip: 'Returns color in string',
  helpUrl: '',
  inputsInline: false
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
javascriptGenerator.forBlock[blockName] = (block) => {
  const code = `s4d.client.dashboard.addColorInput(${javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_NONE)}, ${javascriptGenerator.valueToCode(block, 'desc', javascriptGenerator.ORDER_NONE)}, async function(client, guild, value) {${javascriptGenerator.statementToCode(block, 'set')}}, async function(client, guild) {
        await delay(200);
        return (${javascriptGenerator.valueToCode(block, 'getter', javascriptGenerator.ORDER_NONE)})
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
