import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_forever3';

const blockData = {
  message0: 'repeat forever with delay %4 %1 do %2 send to console? %3',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENT'
    },
    {
      type: 'input_value',
      name: 'LOG',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'DELAY',
      check: 'Number'
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
  const log = JavaScript.valueToCode(block, 'LOG', JavaScript.ORDER_ATOMIC);
  const delay = JavaScript.valueToCode(block, 'DELAY', JavaScript.ORDER_ATOMIC);
  return `
        while(s4d.client && s4d.client.token) {
            await delay(${delay});
            ${JavaScript.statementToCode(block, 'STATEMENT')}
            if (${log}) {
                console.log('ran')
            }
        }
    `;
};
