import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_lasercat_switch_break';

const blockData = {
  message0: 'end case',
  args0: [],
  colour: '#8B48A3',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Allows you to manually end a case here.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  return `break;
    `;
};
