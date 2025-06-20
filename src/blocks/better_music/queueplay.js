import Blockly from 'blockly/core';

const blockName = 'better_play';

const blockData = {
  message0: 'Search and play %1',
  args0: [
    {
      type: 'input_value',
      name: 'SEARCH',
      check: 'String'
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
  const search = Blockly.JavaScript.valueToCode(block, 'SEARCH', Blockly.JavaScript.ORDER_ATOMIC);
  const code = `
    let song = await queue.play(${search}).catch(_ => {\n
        if(!guildQueue)\n
            queue.stop();\n
    });`;
  return code;
};
