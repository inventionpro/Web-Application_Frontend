import Blockly from 'blockly/core';

const blockName = 's4d_skip';

const blockData = {
  message0: '%{BKY_SKIP}',
  args0: [
    {
      type: 'input_value',
      name: 'QUEUE',
      check: 'queue'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const queue = Blockly.JavaScript.valueToCode(block, 'QUEUE', Blockly.JavaScript.ORDER_ATOMIC);
  const code = `${queue}.skip()\n`;
  return code;
};
