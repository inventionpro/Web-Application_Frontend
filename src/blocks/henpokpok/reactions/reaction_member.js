import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'react_member';
const blockData = {
  message0: 'Reacting member',
  colour: '#F0C55C',
  tooltip: 'react,remove reaction',
  output: Types.Member
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['user', javascriptGenerator.ORDER_NONE];
};
