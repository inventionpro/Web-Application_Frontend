import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_roblox_get_group_icon';

const blockData = {
  message0: 'get roblox group icon with ID %1 then %2 %3',
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
  tooltip: 'Get the Roblox group icon with the ID and then run the blocks below.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const group = JavaScript.valueToCode(block, 'GROUP', JavaScript.ORDER_ATOMIC);
  const then = JavaScript.statementToCode(block, 'THEN');
  const code = `S4D_APP_NOBLOX.getLogo(${group}).then(async (roblox_group_icon) => {
  ${then}
})
    `;
  return code;
};
