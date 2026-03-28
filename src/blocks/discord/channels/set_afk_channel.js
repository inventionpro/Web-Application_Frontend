import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'set_afk_channel';
const blockData = {
  type: 'set_afk_channel',
  message0: 'Set afk channel to %1 with the reason %2 on the server %3',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: Types.Channel
    },
    {
      type: 'input_value',
      name: 'reason',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'server',
      check: Types.Server
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#14bde3',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['set_afk_channel'] = (block) => {
  var server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  var channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  var reason = javascriptGenerator.valueToCode(block, 'reason', javascriptGenerator.ORDER_ATOMIC);
  return `${server}.setAFKChannel(${channel}, ${reason});`;
};
