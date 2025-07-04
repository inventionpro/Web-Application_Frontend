import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript['invs_channel'] = function (block) {
  var value_channel = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.invites.fetch({ channelId: ${value_channel}.id })`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.ORDER_NONE];
};
