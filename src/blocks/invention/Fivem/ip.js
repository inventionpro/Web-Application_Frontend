import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'inv_fivem_ip';

const blockData = {
  message0: 'server ip',
  output: 'String',
  colour: '#CC8899',
  tooltip: 'Ip of server',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  var code = `__S4D__fivem_server.ip`;
  return [code, javascriptGenerator.ORDER_NONE];
};
