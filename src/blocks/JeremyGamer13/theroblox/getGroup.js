import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_roblox_get_user_group';

const blockData = {
  message0: 'get roblox group info with ID %1 then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'GROUP',
      check: ['Number', 'var', 'Env']
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
  tooltip: 'Get the Roblox group info with the ID and then run the blocks below.',
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
  const code = `S4D_APP_NOBLOX.getGroup(${group}).then(async (roblox_group_info) => {
  ${then}
})
    `;
  return code;
};
