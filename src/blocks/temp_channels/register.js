import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_temp_register';

const name = 'Register a voice channel with the id %1 Delete if empty %2 Max member count %3 Temp channel name %4';

const blockData = {
  type: 'block_type',
  message0: `${name}`,
  args0: [
    {
      type: 'input_value',
      name: 'CHANNELID',
      Check: 'String'
    },
    {
      type: 'input_value',
      name: 'EMPTY',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'MAX',
      check: 'Number'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  const channel_id = JavaScript.valueToCode(block, 'CHANNELID', JavaScript.ORDER_ATOMIC);
  const empty = JavaScript.valueToCode(block, 'EMPTY', JavaScript.ORDER_ATOMIC);
  const max = JavaScript.valueToCode(block, 'MAX', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  const code = `
    const stuffkksadicnsake = {
      childAutoDeleteIfEmpty: ${empty},
      childMaxUsers: ${max},
      childBitrate: 64000,
      childFormat: (s4dmember, count) => ${name}
    }
    tempChannels.registerChannel(${channel_id}, stuffkksadicnsake);
    db.push("temp-channels", {
      channelID: message.member.voice.channel.id,
      options: stuffkksadicnsake
    });
    `;
  return code;
};
