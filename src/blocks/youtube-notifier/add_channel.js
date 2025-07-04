import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'add_channel';

const blockData = {
  message0: 'add channel id %1',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: ['Number', 'String']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  const code = `s4d.notifer.addChannels([${id}])`;
  return code;
};
