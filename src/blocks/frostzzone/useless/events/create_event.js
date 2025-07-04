import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'create_event';

const blockData = {
  message0: 'when event %1 is received %2 do %3',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#F5AB1A',
  tooltip: 'Create event',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var code;
  let value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  let statements_then = JavaScript.statementToCode(block, 'THEN');
  code = `eventEmitter.on(${value_name}, async => {
    ${statements_then}
  });
`;
  return code;
};
