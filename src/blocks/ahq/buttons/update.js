import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'updte_ahq_button';

const blockData = {
  message0: 'update %1 %2 %3 button %4 %5 embeds %6',
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
  const embed = JavaScript.valueToCode(block, 'embed val', JavaScript.ORDER_NONE);
  if (statementsThen) {
    ahq = `components: [new Discord.ActionRowBuilder().addComponents(
            ${statementsThen.replace("'", '').replace("'", '')}
        )],`;
  }
  if (embed) {
    extra = `${embed}`;
  }
  const code = `i.update({
        content: String(${data}),
        ${ahq.replace('`', '').replace('`', '')}
        ${extra.replace('`', '').replace('`', '').replace("'", '').replace("'", '')}
        });`;
  return code;
};
