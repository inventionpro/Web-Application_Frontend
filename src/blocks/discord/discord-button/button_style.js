import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_button_style';

const blockData = {
  message0: '%{BKY_BUTTON_STYLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'COLOR',
      options: [
        ['%{BKY_RED}', 'DANGER'],
        ['%{BKY_BLURPLE}', 'PRIMARY'],
        ['%{BKY_GREY}', 'SECONDARY'],
        ['%{BKY_GREEN}', 'SUCCESS'],
        ['%{BKY_LINK}', 'LINK']
      ]
    }
  ],
  colour: '#4C97FF',
  output: 'ButtonStyle',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const color = block.getFieldValue('COLOR');
  const code = [`'${color}'`, JavaScript.ORDER_NONE];
  return code;
};
