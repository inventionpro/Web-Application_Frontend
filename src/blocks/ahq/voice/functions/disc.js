import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'disconnect_voice';

const blockData = {
  message0: 'Disconnect member %1 reason: %3 %4 from voice channel',
  args0: [
    {
      type: 'field_dropdown',
      name: 'test',
      options: [['Voice Member', 'newState']]
    },
    {
      type: 'input_value',
      name: 'r',
      check: 'String'
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: '#40BF4A',
  tooltip: 'Only Works with channel join & channel switch',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = `newState.disconnect(${JavaScript.valueToCode(block, 'r', JavaScript.ORDER_ATOMIC || null)})`;
  return code;
};
