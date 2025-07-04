import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_create_embed_thens';

const blockData = {
  message0: '%{BKY_C_PERM}',
  args0: [
    {
      type: 'input_statement',
      name: 'THENA'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'MEMBER',
      check: ['Member', 'Role']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_statement',
      name: 'THEND'
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

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'THEN');
  const member = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.updateOverwrite(${member}, {\n${statements}\n});`;
  return code;
};
