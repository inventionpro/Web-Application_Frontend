import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'renamec';

const blockData = {
  message0: 'Rename channel %1 New name %2',
  args0: [
    {
      type: 'input_value',
      check: 'Channel',
      name: 'channel'
    },
    {
      check: 'String',
      type: 'input_value',
      name: 'name'
    }
  ],
  colour: '#0c97f0',
  tooltip: 'Rename a channel',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const cn = javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_ATOMIC);
  const nn = javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_ATOMIC);
  const code = `${cn}.setName(${nn})
    `;
  return code;
};
