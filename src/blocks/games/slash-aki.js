import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'aki';

const blockData = {
  message0: '(slash) Start an Akinator with the gametype  %1',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: ['Message', 'String']
    }
  ],
  colour: '#D14081',
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
  const message = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC);
  return `akinator(interaction, {
        language: "en",
        childMode: false,
        gameType: ${message},
        useButtons: true
})`;
};
