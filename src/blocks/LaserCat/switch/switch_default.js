import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_lasercat_switch_default';

const blockData = {
  message0: 'default %1 %2',
  args0: [
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
  tooltip: "The default case if the switched item doesn't match any of the other cases mentioned.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const blocks = javascriptGenerator.statementToCode(block, 'blocks');

  return `
    default:
    ${blocks}
    `;
};
