import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
const blockName = 'make_ahq_embed';

const blockData = {
  message0: 'Make An Embed with name %1 %2 then %3',
  args0: [
    {
      type: 'input_value',
      name: 'button name',
      check: ['String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
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
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE) || 'embed';
  const finaln = name.replace("'", '').replace("'", '');
  const statementsThen = JavaScript.statementToCode(block, 'STATEMENTS', JavaScript.ORDER_ATOMIC);
  const code = `let ${finaln} = new MessageEmbed()\n${statementsThen}`;
  return code;
};
