import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../types.js';

const blockName = 'qr';
const blockData = {
  message0: 'QRCode',
  colour: '#D14081',
  args0: [],
  tooltip: 'QR code, as text and not an image',
  output: Types.String,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['QR', javascriptGenerator.ORDER_NONE];
};
