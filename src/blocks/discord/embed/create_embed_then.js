import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_create_embed_then';

const blockData = {
  message0: '%{BKY_CREATE_EMBED_THEN}',
  args0: [
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: '#40BF4A',
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

JavaScript[blockName] = function (block) {
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const code = `var embed = new Discord.EmbedBuilder() \n ${statementThen}\n`;
  return code;
};
