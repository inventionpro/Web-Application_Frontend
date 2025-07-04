import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'footer_ahq_embed';

const blockData = {
  message0: 'Set Footer %1 image %2 %3 Embed %4',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: ['String']
    },
    {
      type: 'input_value',
      name: 'image',
      check: ['String']
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    }
  ],
  colour: '#40BF4A',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  let extra = '';
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE) || 'embed';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const ahq = JavaScript.valueToCode(block, 'image', JavaScript.ORDER_NONE) || null;
  if (ahq !== null) {
    extra = `, ${ahq}`;
  }
  const code = `${finaln}.setFooter(${statementsThen}${extra});`;
  return code;
};
