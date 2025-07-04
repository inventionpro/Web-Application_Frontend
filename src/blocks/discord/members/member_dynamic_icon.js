import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_member_dynamic_icon';

const blockData = {
  message0: 'member %1 animated profile picture',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    }
  ],
  colour: '#50a6c9',
  output: 'String',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const member = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  return [`${member}.displayAvatarURL({ dynamic : true })`, JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_VALID_MEMBER',
    types: ['MEMBER']
  }
]);
