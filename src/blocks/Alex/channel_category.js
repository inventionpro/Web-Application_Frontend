import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'category_channel';

const blockData = {
  message0: 'Create text channel with name %1 %2 In category with ID %3 %4 In server %5',
  args0: [
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
      name: 'id',
      check: ['String', 'Category']
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#0c97f0',
  tooltip: 'Create a channel in a certain category.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const cid = JavaScript.valueToCode(block, 'id', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const code = `${server}.channels.create(${name}, { type: 'text', parent: ${cid} });
`;
  return code;
};
