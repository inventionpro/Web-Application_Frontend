import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_set_server_name';

const blockData = {
  message0: '%{BKY_SET_SERVER_NAME}',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'NEW_NICKNAME',
      check: ['Number', 'String']
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  const newName = JavaScript.valueToCode(block, 'NEW_NICKNAME', JavaScript.ORDER_ATOMIC);
  const code = `${server}.setName(${newName});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_SET_SERVER_NAME_SERVER',
    types: ['SERVER']
  },
  {
    type: 'notempty',
    message: 'RES_SET_SERVER_NAME_NEW_NICKNAME',
    types: ['NEW_NICKNAME']
  }
]);
