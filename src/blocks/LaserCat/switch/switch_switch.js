import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_lasercat_switch_switch';

const blockData = {
  message0: 'switch %1 %2 %3 ',
  args0: [
    {
      type: 'input_value',
      name: 'switch',
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
  tooltip: "Runs the cases inside if the switched item is equal to their case's value.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const switchh = javascriptGenerator.valueToCode(block, 'switch', javascriptGenerator.ORDER_ATOMIC);
  const blocks = javascriptGenerator.statementToCode(block, 'blocks');

  return `switch (${switchh}) {
        ${blocks}
    };
    `;
};
