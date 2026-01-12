import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'create_category_then';

const blockData = {
  message0: 'Create Category/Channel with name %1 on server %2 of type %3 %4 then %5',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'SERVER',
      check: ['Server']
    },
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['%{BKY_CATEGORY}', 'GUILD_CATEGORY'],
        ['%{BKY_TEXT}', 'GUILD_TEXT'],
        ['%{BKY_VOICE}', 'GUILD_VOICE'],
        ['news', 'GUILD_NEWS'],
        ['stage', 'GUILD_STAGE_VOICE']
      ]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE');
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'SERVER', javascriptGenerator.ORDER_ATOMIC);
  var then = javascriptGenerator.statementToCode(block, 'THEN');
  const code = `${server}.channels.create(${name}, { type: '${type}' }).then(async cat => {${then}});\n`;
  return code;
};
