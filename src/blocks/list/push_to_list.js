import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const list = javascriptGenerator.valueToCode(block, 'LIST', javascriptGenerator.ORDER_ATOMIC);
  const push = javascriptGenerator.valueToCode(block, 'PUSH', javascriptGenerator.ORDER_ATOMIC);
  const code = `${list}.push(${push});\n`;
  return code;
};
