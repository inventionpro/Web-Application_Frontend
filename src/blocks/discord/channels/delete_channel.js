import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_delete_channel';

const blockData = {
  message0: '%{BKY_DELETE_CHANNEL}',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: ['Channel']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const code = `${channel}.delete();\n`;
  return code;
};
