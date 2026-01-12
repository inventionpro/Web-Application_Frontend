import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'GUILD', javascriptGenerator.ORDER_ATOMIC);
  const code = `const queue = s4d.player.createQueue(${server}, {metadata: {channel: ${channel}}, async onBeforeCreateStream(track, source, _queue) {
        if (source === "youtube") {
            return (await playdl.stream(track.url, { discordPlayerCompatibility : true })).stream;
        }
    }
});\n`;
  return code;
};
