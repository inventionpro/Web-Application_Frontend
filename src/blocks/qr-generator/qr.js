import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'qr';

const blockData = {
  message0: 'QRCode',
  colour: '#D14081',
  args0: [],
  tooltip: 'QR code, as text and not an image',
  output: 'String',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = [`QR`, JavaScript.ORDER_NONE];
  return code;
};
