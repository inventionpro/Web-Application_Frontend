import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const search = JavaScript.valueToCode(block, 'SEARCH', JavaScript.ORDER_ATOMIC);
  const code = `
    let song = await queue.play(${search}).catch(_ => {\n
        if(!guildQueue)\n
            queue.stop();\n
    });`;
  return code;
};
