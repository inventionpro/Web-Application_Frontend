import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'create_emoji';

const blockData = {
  message0: 'In server %1 %2 Create emoji with name %3 %4 with URL %5',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'url',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#32a852',
  tooltip: 'Create an emoji in a server with the specified image URL.',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const url = JavaScript.valueToCode(block, 'url', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const code = `${server}.emojis.create(${url}, ${name}) \n`;
  return code;
};
