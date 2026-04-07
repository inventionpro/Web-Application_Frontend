import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_web_keynumber';
const blockData = {
  message0: 'Key number %1',
  args0: [
    {
      type: 'input_value',
      name: 'datafile',
      check: Types.Number
    }
  ],
  colour: 230,
  output: Types.Any,
  tooltip: 'Grabs the value of the key that is numbered.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const datafile = javascriptGenerator.valueToCode(block, 'datafile', javascriptGenerator.ORDER_ATOMIC);
  return [`(Object.keys(JSONdataS4D)[${datafile} - 1])`, javascriptGenerator.ORDER_NONE];
};
