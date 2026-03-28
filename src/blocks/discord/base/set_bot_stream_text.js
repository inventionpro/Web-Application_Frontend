import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_set_bot_stream_text';
const blockData = {
  message0: 'Set status to STREAMING with text %2 using url %1',
  args0: [
    {
      type: 'input_value',
      name: 'URL',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Set a stream link.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const url = javascriptGenerator.valueToCode(block, 'URL', javascriptGenerator.ORDER_ATOMIC);
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return `s4d.client.user.setActivity(${name}, {
  type: Discord.ActivityType.Streaming,
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
