import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'member_color';

const blockData = {
  message0: 'Color of member %1',
  args0: [
    {
      type: 'input_value',
      check: 'Member',
      name: 'member',
      text: ''
    }
  ],
  output: ['Colour', 'String'],
  colour: '#57a0d9',
  tooltip: 'Gets the color that the member appears as in the server.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const member = JavaScript.valueToCode(block, 'member', JavaScript.ORDER_ATOMIC);
  const code = [`${member}.displayHexColor`, JavaScript.ORDER_NONE];
  return code;
};
