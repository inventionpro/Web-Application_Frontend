import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 's4d_temp_register';
const blockData = {
  type: 'block_type',
  message0: 'Register a voice channel with the id %1 Delete if empty %2 Max member count %3 Temp channel name %4',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNELID',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'EMPTY',
      check: Types.Boolean
    },
    {
      type: 'input_value',
      name: 'MAX',
      check: Types.Number
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: Types.String
    }
  ],
  colour: '#48a4f0',
  tooltip: '',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel_id = javascriptGenerator.valueToCode(block, 'CHANNELID', javascriptGenerator.ORDER_ATOMIC);
  const empty = javascriptGenerator.valueToCode(block, 'EMPTY', javascriptGenerator.ORDER_ATOMIC);
  const max = javascriptGenerator.valueToCode(block, 'MAX', javascriptGenerator.ORDER_ATOMIC);
  const name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  return `const stuffkksadicnsake = {
  childAutoDeleteIfEmpty: ${empty},
  childMaxUsers: ${max},
  childBitrate: 64000,
  childFormat: (s4dmember, count) => ${name}
};
tempChannels.registerChannel(${channel_id}, stuffkksadicnsake);
db.push("temp-channels", {
  channelID: message.member.voice.channel.id,
  options: stuffkksadicnsake
});`;
};
