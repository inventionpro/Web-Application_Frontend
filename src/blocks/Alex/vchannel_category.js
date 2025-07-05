import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'vcategory_channel';

const blockData = {
  message0: 'Create voice channel with name %1 In category with ID %2 In server %3',
  args0: [
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'id',
      check: ['String', 'Category']
    },
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  colour: '#0c97f0',
  tooltip: '',
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
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const cid = JavaScript.valueToCode(block, 'id', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);

  const code = `${server}.channels.create(${name}, { type: 'GUILD_VOICE', parent: ${cid} });
`;
  return code;
};
