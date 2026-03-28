import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'invite_ur';
const blockData = {
  message0: 'Invite URL',
  colour: '#502e6e',
  tooltip: 'Get the URL of an invite',
  helpUrl: '',
  output: Types.String
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['invite.url', javascriptGenerator.ORDER_NONE];
};
