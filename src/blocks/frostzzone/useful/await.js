import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

Blockly.Blocks['frost_await'] = {
  init: function () {
    this.jsonInit({
      message0: 'await %1',
      args0: [
        {
          type: 'input_value',
          name: 'input_block'
        }
      ],
      output: null,
      inputsInline: true,
      colour: '#D14081',
      tooltip: 'awaits code from block, search exclusive :O',
      helpUrl: ''
    });
  }
};

javascriptGenerator.forBlock['frost_await'] = (block) => {
  let input_block = javascriptGenerator.valueToCode(block, 'input_block', javascriptGenerator.ORDER_ATOMIC);
  let code = `await ${input_block}`;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};
