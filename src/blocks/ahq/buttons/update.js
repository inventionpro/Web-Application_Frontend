import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = (block) => {
  var ahq = ``;
  let extra = '';
  const data = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const statementsThen = javascriptGenerator.valueToCode(block, 'button val', javascriptGenerator.ORDER_NONE);
  const embed = javascriptGenerator.valueToCode(block, 'embed val', javascriptGenerator.ORDER_NONE);
  if (statementsThen) {
    ahq = `components: [new MessageActionRow().addComponents(
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
