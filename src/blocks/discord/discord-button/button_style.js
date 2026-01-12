import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_button_style';

const blockData = {
  message0: '%{BKY_BUTTON_STYLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'STYLE',
      options: [
        ['%{BKY_BUTTON_STYLE_PRIMARY}', '1'],
        ['%{BKY_BUTTON_STYLE_SECONDARY}', '2'],
        ['%{BKY_BUTTON_STYLE_SUCCESS}', '3'],
        ['%{BKY_BUTTON_STYLE_DANGER}', '4'],
        ['%{BKY_BUTTON_STYLE_LINK}', '5']
        // TODO: Add premium buttons
        //['%{BKY_BUTTON_STYLE_PREMIUM}', '6']
      ]
    }
  ],
  colour: '#4C97FF',
  output: 'ButtonStyle',
  tooltip: 'The style of a button',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const style = block.getFieldValue('STYLE');
  const code = [`${style}`, javascriptGenerator.ORDER_NONE];
  return code;
};
