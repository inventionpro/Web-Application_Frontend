import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_get_msg_then';

const blockData = {
  message0: '%{BKY_GET_MESSAGE_BY_ID}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: ['Number', 'String']
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const code = `${channel}.messages.fetch(${id}).then(async (s4dmessage) =>{\n ${statementThen} \n});`;
  return code;
};
