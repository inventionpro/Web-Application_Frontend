import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'new_invite';

const blockData = {
  message0: 'Create invite for channel  %1  then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'then',
      align: 'RIGHT'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#502e6e',
  tooltip: 'Create an invite for a channel, and then run the blocks inside.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const Then = javascriptGenerator.statementToCode(block, 'then');
  const channel = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  const code = `${channel}.createInvite({ maxAge: 0, maxUses: 0 }).then(async invite => { \n ${Then} \n });`;
  return code;
};
