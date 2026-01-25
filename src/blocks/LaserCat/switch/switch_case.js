import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_lasercat_switch_case';

const blockData = {
  message0: 'case %1 %2 %3 ',
  args0: [
    {
      type: 'input_value',
      name: 'case',
      check: ['Number', 'String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'blocks'
    }
  ],
  colour: '#8B48A3',
  previousStatement: null,
  nextStatement: null,
  tooltip: "Run the blocks inside if the switched item is equal to this case's value.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const casee = javascriptGenerator.valueToCode(block, 'case', javascriptGenerator.ORDER_ATOMIC);
  const blocks = javascriptGenerator.statementToCode(block, 'blocks');

  return `
    case ${casee}:
    ${blocks}
    `;
};
