import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'create_emoji';

const blockData = {
  message0: 'In server %1 Create emoji with name %2 with URL %3',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'url',
      check: 'String'
    }
  ],
  colour: '#32a852',
  tooltip: 'Create an emoji in a server with the specified image URL.',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const url = javascriptGenerator.valueToCode(block, 'url', javascriptGenerator.ORDER_ATOMIC);
  const name = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  const code = `${server}.emojis.create(${url}, ${name}) \n`;
  return code;
};
