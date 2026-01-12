import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'fz_attachment_info';

const blockData = {
  message0: '%1 of attachment %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['URL', 'attachment'],
        ['File Name', 'name'],
        ['File ID', 'id'],
        ['Proxy Url', 'proxyURL'],
        ['Content type', 'contentType']
      ]
    },
    {
      type: 'input_value',
      name: 'ATTACH',
      check: 'Attachment'
    }
  ],
  output: 'String',
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const attach = javascriptGenerator.valueToCode(block, 'ATTACH', javascriptGenerator.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  const code = [`${attach}.${type}`, javascriptGenerator.ORDER_NONE];
  return code;
};
