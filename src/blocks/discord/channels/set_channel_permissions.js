import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'THEN');
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const code = `${channel}.updateOverwrite(${member}, {\n${statements}\n});`;
  return code;
};
