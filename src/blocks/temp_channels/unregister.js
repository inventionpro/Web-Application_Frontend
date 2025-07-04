import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_temp_unregister';

const name = 'Unregister a voice channel with the id %1';

const blockData = {
  type: 'block_type',
  message0: `${name}`,
  args0: [
    {
      type: 'input_value',
      name: 'CHANNELID',
      Check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#48a4f0',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel_id = JavaScript.valueToCode(block, 'CHANNELID', JavaScript.ORDER_ATOMIC);
  const code = `tempChannels.unregisterChannel(${channel_id});`;
  return code;
};
