import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'fz_lock_emoji';

const blockData = {
  message0: 'Lock/add role with id %2 to emoji %1',
  args0: [
    {
      type: 'input_value',
      name: 'EMOJI',
      check: ['Emoji']
    },
    {
      type: 'input_value',
      name: 'ROLE',
      check: 'Role'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const emoji = JavaScript.valueToCode(block, 'EMOJI', JavaScript.ORDER_ATOMIC);
  const role = JavaScript.valueToCode(block, 'ROLE', JavaScript.ORDER_ATOMIC);
  const code = `${emoji}.roles.add([${role}]);\n`;
  return code;
};
