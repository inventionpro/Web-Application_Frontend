import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_leave_server';

const blockData = {
  message0: '%{BKY_LEAVE_SERVER}',
  args0: [
    {
      type: 'input_value',
      name: 'SERVER',
      check: 'Server'
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
  const server = JavaScript.valueToCode(block, 'SERVER', JavaScript.ORDER_ATOMIC);
  var code = `${server}.leave()`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_VALID_SERVER',
    types: ['SERVER']
  }
]);
