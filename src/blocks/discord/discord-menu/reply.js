import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 's4d_menu_reply';
const blockData = {
  message0: '%{BKY_REPLY_MENU}',
  args0: [
    {
      type: 'input_value',
      name: 'REPLY',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_value',
      name: 'TRUEORFALSE',
      check: Types.Boolean
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
  const tof = javascriptGenerator.valueToCode(block, 'TRUEORFALSE', javascriptGenerator.ORDER_ATOMIC);
  const reply = javascriptGenerator.valueToCode(block, 'REPLY', javascriptGenerator.ORDER_ATOMIC);
  return `await i.reply({
  content: ${reply},
  ephemeral: ${tof === null ? false : tof}
});`;
};
