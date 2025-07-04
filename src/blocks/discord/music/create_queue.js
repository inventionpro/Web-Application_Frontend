import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_create_queue';

const blockData = {
  message0: '%{BKY_CREATE_QUEUE}',
  args0: [
    {
      type: 'input_value',
      name: 'GUILD',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
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
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'GUILD', JavaScript.ORDER_ATOMIC);
  const code = `const queue = s4d.player.createQueue(${server}, {metadata: {channel: ${channel}}, async onBeforeCreateStream(track, source, _queue) {
        if (source === "youtube") {
            return (await playdl.stream(track.url, { discordPlayerCompatibility : true })).stream;
        }
    }
});\n`;
  return code;
};
