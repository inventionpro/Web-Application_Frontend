import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'renamec';

const blockData = {
  message0: 'Rename channel %1 %2 New name %3',
  args0: [
    {
      type: 'input_value',
      check: 'Channel',
      name: 'channel'
    },
    {
      type: 'input_space'
    },
    {
      check: 'String',
      type: 'input_value',
      name: 'name'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#0c97f0',
  tooltip: 'Rename a channel',
  helpUrl: ''
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
