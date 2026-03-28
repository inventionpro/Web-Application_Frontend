import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_set_bot_stream';
const blockData = {
  message0: '%{BKY_SET_BOT_STREAM}',
  args0: [
    {
      type: 'input_value',
      name: 'URL',
      check: Types.String
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
  const url = javascriptGenerator.valueToCode(block, 'URL', javascriptGenerator.ORDER_ATOMIC);
  return `s4d.client.user.setActivity("with depression", {
  type: "STREAMING",
  url: ${url}
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_URL',
    types: ['URL']
  }
]);
