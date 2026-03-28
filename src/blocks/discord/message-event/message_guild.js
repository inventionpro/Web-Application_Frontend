import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_message_guild';
const blockData = {
  message0: '%{BKY_MESSAGE_GUILD}',
  colour: '#D85E47',
  output: Types.Server,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.guild', javascriptGenerator.ORDER_NONE];
};
