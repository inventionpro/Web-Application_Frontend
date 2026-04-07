import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'inv_fivem_ip';
const blockData = {
  message0: 'server ip',
  output: Types.String,
  colour: '#CC8899',
  tooltip: 'Ip of server',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return [`__S4D__fivem_server.ip`, javascriptGenerator.ORDER_NONE];
};
