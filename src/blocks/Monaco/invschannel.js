import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'monaco_invites_channels';

const blockData = {
  type: 'monaco_invites_channels',
  message0: 'all invites of channel %1 in server %2',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  colour: '#4C97FF',
  output: 'Invites',
  inputsInline: true,
  tooltip: 'Get all invites of a specific channel in a specific server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['invs_channel'] = (block) => {
  var value_channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  var value_server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_server}.invites.fetch({ channelId: ${value_channel}.id })`;
  return [code, javascriptGenerator.ORDER_NONE];
};
