import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'cu_channel';

const blockData = {
  message0: '%1 channel',
  args0: [
    {
      type: 'field_dropdown',
      name: 'INFO',
      options: [
        ['new channel', 'newChannel'],
        ['old channel', 'oldChannel']
      ]
    }
  ],
  colour: '#a55b80',
  output: 'Channel',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const channel = block.getFieldValue('INFO');
  const code = [`${channel}.channel`, javascriptGenerator.ORDER_NONE];
  return code;
};
