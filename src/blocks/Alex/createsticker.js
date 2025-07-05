import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'create_sticker';

const blockData = {
  message0: 'In server %1 Create sticker with name %2 With tags %3 With image %4',
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
      name: 'tags',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'file'
    }
  ],
  colour: '#02a836',
  tooltip: 'Creates a sticker on the server.',
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
  const file = JavaScript.valueToCode(block, 'file', JavaScript.ORDER_ATOMIC);
  const name = JavaScript.valueToCode(block, 'name', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  const tags = JavaScript.valueToCode(block, 'tags', JavaScript.ORDER_ATOMIC);
  const code = `${server}.stickers.create(${file}, ${name}, ${tags}); \n`;
  return code;
};
