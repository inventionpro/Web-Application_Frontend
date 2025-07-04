import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'push_to_list';

const blockData = {
  message0: 'in list %1 push %2',
  args0: [
    {
      type: 'input_value',
      name: 'LIST',
      check: 'Array'
    },
    {
      type: 'input_value',
      name: 'PUSH',
      check: ['Number', 'String', 'Member', 'Channel', 'Array', 'Boolean', 'Role', 'Server']
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.setStyle('list_blocks');
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const list = JavaScript.valueToCode(block, 'LIST', JavaScript.ORDER_ATOMIC);
  const push = JavaScript.valueToCode(block, 'PUSH', JavaScript.ORDER_ATOMIC);
  const code = `${list}.push(${push});\n`;
  return code;
};
