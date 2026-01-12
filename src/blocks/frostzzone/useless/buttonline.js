import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'frost_buttonline';

const blockData = {
  message0: 'Make new button line %1 %2 %3',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'code'
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const code = javascriptGenerator.statementToCode(block, 'code');
  return `),new Discord.ActionRowBuilder()
    .addComponents(${code}`;
};
