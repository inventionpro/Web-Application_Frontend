import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'set_member_cooldown';

const blockData = {
  message0: 'set member on cooldown %1',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  const code = `Cooldown.add(${member}.id);\n`;
  return code;
};
