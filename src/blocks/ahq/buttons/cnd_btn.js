import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
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
JavaScript[blockName] = function (block) {
  let extra = '';
  const name = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const data = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE);
  const embed = JavaScript.valueToCode(block, 'embed val', JavaScript.ORDER_NONE);
  if (embed) {
    extra = `${embed}`;
  }
  const statementsThen = JavaScript.valueToCode(block, 'button val', JavaScript.ORDER_NONE);
  const ahq = statementsThen.replace("'", '').replace("'", '');
  const code = `${name}.send({
        content: String(${data}),
        components: [new MessageActionRow().addComponents(${ahq})],
        ${extra.replace('`', '').replace('`', '').replace("'", '').replace("'", '')}
        });`;
  return code;
};
