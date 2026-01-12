import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'Akinator';

const blockData = {
  message0: 'Start an Akinator with the gametype  %1',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC);
  return `akinator(s4dmessage, {
        language: "en",
        childMode: true,
        gameType: ${message},
        useButtons: true
})
`;
};
