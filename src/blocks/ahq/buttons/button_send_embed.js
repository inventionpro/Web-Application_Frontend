import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'embed_btn_ahq';

const blockData = {
  message0: 'send Jose/Redo embed',
  colour: '#33cc00',
  output: 'ahq',
  tooltip: 'Send a Jose or Redo embed, which have no names.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = ['embeds: [embed]', JavaScript.ORDER_NONE];
  return code;
};
