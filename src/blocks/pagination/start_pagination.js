import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'start_pagination';

const blockData = {
  message0: 'start pagination. message %1 emoji1 %2 emoji2 %3 timeout %4 embeds %5',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: 'Message'
    },
    {
      type: 'input_value',
      name: 'EMOJI1',
      check: ['Number', 'String']
    },
    {
      type: 'input_value',
      name: 'EMOJI2',
      check: ['Number', 'String']
    },
    {
      type: 'input_value',
      name: 'TIMEOUT',
      check: ['Number', 'String']
    },
    {
      type: 'input_value',
      name: 'EMBEDS',
      check: ['Message_Embed', 'Embed', 'Embeds']
    }
  ],
  colour: '#5BA55B',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const message = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC) || null;
  const emoji1 = JavaScript.valueToCode(block, 'EMOJI1', JavaScript.ORDER_ATOMIC) || null;
  const emoji2 = JavaScript.valueToCode(block, 'EMOJI2', JavaScript.ORDER_ATOMIC) || null;
  const timeout = JavaScript.valueToCode(block, 'TIMEOUT', JavaScript.ORDER_ATOMIC) || null;
  const embeds = JavaScript.valueToCode(block, 'EMBEDS', JavaScript.ORDER_ATOMIC) || null;
  return `paginationEmbed(${message}, ${embeds}, ['${emoji1}', '${emoji2}'],${timeout});\n`;
};
