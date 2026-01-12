import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
const blockName = 'snd_ahq_button';

const blockData = {
  message0: 'send button on channel %1 %2 text %3 %4 button %5 %6 embed %7',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: ['Channel']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
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
  let extra = '';
  const name = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const data = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE);
  const embed = javascriptGenerator.valueToCode(block, 'embed val', javascriptGenerator.ORDER_NONE);
  if (embed) {
    extra = `${embed}`;
  }
  const statementsThen = javascriptGenerator.valueToCode(block, 'button val', javascriptGenerator.ORDER_NONE);
  const ahq = statementsThen.replace("'", '').replace("'", '');
  const code = `${name}.send({
        content: String(${data}),
        components: [new MessageActionRow().addComponents(${ahq})],
        ${extra.replace('`', '').replace('`', '').replace("'", '').replace("'", '')}
        });`;
  return code;
};
