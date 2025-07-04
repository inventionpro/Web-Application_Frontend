import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'lime_s4d_embed_create';

const blockData = {
  type: 's4d_embed_create',
  message0: 'Create Embed With name %1 Then %2',
  args0: [
    {
      type: 'input_value',
      name: 'name_value',
      check: 'String'
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

JavaScript['s4d_embed_create'] = function (block) {
  let name_value = JavaScript.valueToCode(block, 'name_value', JavaScript.ORDER_ATOMIC);
  let statements_then = JavaScript.statementToCode(block, 'THEN');
  name_value = name_value.split(' ');
  name_value = name_value.join('_');
  name_value = name_value.toLowerCase();
  name_value = name_value.replace("'", '');
  name_value = name_value.replace("'", '');
  let code = `let ${name_value} = new Discord.MessageEmbed() \n ${statements_then}\n`;
  return code;
};
