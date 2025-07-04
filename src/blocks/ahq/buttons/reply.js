import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
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
      check: ['String', 'Integer']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'Boolean'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button val',
      check: 'String'
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
JavaScript[blockName] = function (block) {
  var ahq = ``;
  let extra = '';
  const data = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const statementsThen = JavaScript.valueToCode(block, 'button val', JavaScript.ORDER_NONE);
  const eph = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE) || false;
  const embed = JavaScript.valueToCode(block, 'embed val', JavaScript.ORDER_NONE);
  if (statementsThen) {
    ahq = `components: [new MessageActionRow().addComponents(
            ${statementsThen.replace("'", '').replace("'", '')}
        )],`;
  }
  if (embed) {
    extra = `${embed}`;
  }
  const code = `i.reply({
        content: String(${data}),
        ephemeral: ${eph},
        ${ahq.replace('`', '').replace('`', '')}
        ${extra.replace('`', '').replace('`', '').replace("'", '').replace("'", '')}
        });`;
  return code;
};
