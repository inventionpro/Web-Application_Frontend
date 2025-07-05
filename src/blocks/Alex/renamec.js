import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'renamec';

const blockData = {
  message0: 'Rename channel %1 New name %2',
  args0: [
    {
      type: 'input_value',
      check: 'Channel',
      name: 'channel'
    },
    {
      check: 'String',
      type: 'input_value',
      name: 'name'
    }
  ],
  colour: '#0c97f0',
  tooltip: 'Rename a channel',
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
  const cn = JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_ATOMIC);
  const nn = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const code = `${cn}.setName(${nn})
    `;
  return code;
};
