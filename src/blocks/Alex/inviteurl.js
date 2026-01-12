import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'invite_ur';

const blockData = {
  message0: 'Invite URL',
  colour: '#502e6e',
  tooltip: 'Get the URL of an invite',
  helpUrl: '',
  output: 'String'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = [`invite.url`, javascriptGenerator.ORDER_NONE];
  return code;
};
