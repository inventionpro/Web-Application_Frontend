import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = '2imagepng';

const blockData = {
  message0: '(image) new %1 of image1 %2 image2 %3',
  args0: [
    {
      type: 'field_grid_dropdown',
      name: 'INFO',
      options: [
        ['Batslap', 'Batslap'],
        ['Bed', 'Bed'],
        ['DoubleStonk', 'DoubleStonk'],
        ['Kiss', 'Kiss'],
        ['Spank', 'Spank']
      ]
    },
    {
      type: 'input_value',
      name: 'IMAGE',
      check: ['Number', 'String']
    },
    {
      type: 'input_value',
      name: 'IMAGE2',
      check: ['Number', 'String']
    }
  ],
  output: 'ImageBuffPng',
  colour: '#5BA58C',
  inputsInline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const image = JavaScript.valueToCode(block, 'IMAGE', JavaScript.ORDER_ATOMIC);
  const image2 = JavaScript.valueToCode(block, 'IMAGE2', JavaScript.ORDER_ATOMIC);
  const info2 = block.getFieldValue('INFO');
  let info1 = info2.replace("'", '');
  let info = info1.replace("'", '');
  const code = [`await new DIG.${info}().getImage(${image},${image2})`, JavaScript.ORDER_NONE];
  return code;
};
