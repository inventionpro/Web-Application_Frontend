import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_create_server';

const blockData = {
  message0: 'create server with name %1 then %2',
  args0: [
    {
      type: 'input_value',
      name: 'create',
      check: 'String'
    },
    {
      type: 'input_statement',
      name: 'then'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Create a discord server. Only available if the bot is in fewer than 10 servers.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_create_server'] = function (block) {
  var value_create = JavaScript.valueToCode(block, 'create', JavaScript.ORDER_ATOMIC);
  var statements = JavaScript.statementToCode(block, 'then');
  // TODO: Assemble JavaScript into code variable.
  var guilder = `s4d.client.guilds.create(String(${value_create})).then(async newServer => {
  ${statements}
})`;
  return guilder;
};
