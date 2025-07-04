import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_forever';

const blockData = {
  message0: '%{BKY_FOREVER}',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENT'
    }
  ],
  colour: '#5BA55B',
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

JavaScript[blockName] = function (block) {
  return `
        while(s4d.client && s4d.client.token) {
            await delay(50);
            ${JavaScript.statementToCode(block, 'STATEMENT')}
            console.log('ran')
        }
    `;
};
