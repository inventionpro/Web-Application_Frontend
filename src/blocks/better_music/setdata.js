import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'queue_setdata';

const blockData = {
  message0: 'Set track channel',
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

JavaScript[blockName] = function () {
  const code = `
    let queue = client.player.createQueue(message.guild.id, {\n
        data: {\n
            channel: s4dmessage.channel
        }
    });`;
  return code;
};
