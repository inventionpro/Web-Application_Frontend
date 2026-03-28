import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { T, Types } from '../../types.js';

const blockName = 'rply_ahq_button';
const blockData = {
  message0: 'reply %1 %2 %3 ephemeral %4 %5 button %6 %7 embed %8',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'Label',
      check: T(Types.String, Types.Number)
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: Types.Boolean
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button val',
      check: Types.String
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'embed val',
      check: ''
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

javascriptGenerator.forBlock[blockName] = (block) => {
  var ahq = '';
  let extra = '';
  const data = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const statementsThen = javascriptGenerator.valueToCode(block, 'button val', javascriptGenerator.ORDER_NONE);
  const eph = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE) || false;
  const embed = javascriptGenerator.valueToCode(block, 'embed val', javascriptGenerator.ORDER_NONE);
  if (statementsThen)
    ahq = `components: [new Discord.ActionRowBuilder().addComponents(
  ${statementsThen.replace("'", '').replace("'", '')}
)],`;
  if (embed) extra = embed;
  return `i.reply({
  content: String(${data}),
  ephemeral: ${eph},
  ${ahq.replace('`', '').replace('`', '')}
  ${extra.replace('`', '').replace('`', '').replace("'", '').replace("'", '')}
});`;
};
