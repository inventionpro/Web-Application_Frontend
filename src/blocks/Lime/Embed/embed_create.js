import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'lime_s4d_embed_create';
const blockData = {
  type: 's4d_embed_create',
  message0: 'Create Embed With name %1 Then %2',
  args0: [
    {
      type: 'input_value',
      name: 'name_value',
      check: Types.String
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#54CF83',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['s4d_embed_create'] = (block) => {
  let name_value = javascriptGenerator.valueToCode(block, 'name_value', javascriptGenerator.ORDER_ATOMIC);
  let statements_then = javascriptGenerator.statementToCode(block, 'THEN');
  name_value = name_value.split(' ');
  name_value = name_value.join('_');
  name_value = name_value.toLowerCase();
  name_value = name_value.replace("'", '');
  name_value = name_value.replace("'", '');
  return `let ${name_value} = new Discord.MessageEmbed()
  ${statements_then}`;
};
