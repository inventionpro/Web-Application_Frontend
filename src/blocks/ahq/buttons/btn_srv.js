import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'id_btn_srv';
const blockData = {
  message0: 'button server',
  colour: '#33cc00',
  output: Types.Server,
  tooltip: 'The server the buttons were posted in.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['i.guild', javascriptGenerator.ORDER_NONE];
};
