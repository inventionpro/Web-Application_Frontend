import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const message = javascriptGenerator.valueToCode(block, 'MESSAGE', javascriptGenerator.ORDER_ATOMIC) || null;
  const emoji1 = javascriptGenerator.valueToCode(block, 'EMOJI1', javascriptGenerator.ORDER_ATOMIC) || null;
  const emoji2 = javascriptGenerator.valueToCode(block, 'EMOJI2', javascriptGenerator.ORDER_ATOMIC) || null;
  const timeout = javascriptGenerator.valueToCode(block, 'TIMEOUT', javascriptGenerator.ORDER_ATOMIC) || null;
  const embeds = javascriptGenerator.valueToCode(block, 'EMBEDS', javascriptGenerator.ORDER_ATOMIC) || null;
  return `paginationEmbed(${message}, ${embeds}, ['${emoji1}', '${emoji2}'],${timeout});\n`;
};
