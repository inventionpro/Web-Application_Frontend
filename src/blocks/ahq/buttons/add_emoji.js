import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'emoji_ahq_button';
const blockData = {
  message0: 'add emoji %1 %2 to button %3',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: ['String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    }
  ],
  colour: '#33cc00',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE);
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const code = `${finaln}.setEmoji(${statementsThen});`;
  return code;
};
