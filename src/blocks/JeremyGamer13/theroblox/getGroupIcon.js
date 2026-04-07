import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'jg_roblox_get_group_icon';
const blockData = {
  message0: 'get roblox group icon with ID %1 then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'GROUP',
      check: Types.Number
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: 0,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Get the Roblox group icon with the ID and then run the blocks below.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const group = javascriptGenerator.valueToCode(block, 'GROUP', javascriptGenerator.ORDER_ATOMIC);
  const then = javascriptGenerator.statementToCode(block, 'THEN');
  return `S4D_APP_NOBLOX.getLogo(${group}).then(async (roblox_group_icon) => {
  ${then}
});`;
};
