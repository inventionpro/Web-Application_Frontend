import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'fz_attachment_info2';

const blockData = {
  message0: '%1 of attachment %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['Height', 'height'],
        ['Width', 'width']
      ]
    },
    {
      type: 'input_value',
      name: 'ATTACH',
      check: 'Attachment'
    }
  ],
  output: 'Number',
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const attach = JavaScript.valueToCode(block, 'ATTACH', JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue('TYPE');
  const code = [`${attach}.${type}`, JavaScript.ORDER_NONE];
  return code;
};
