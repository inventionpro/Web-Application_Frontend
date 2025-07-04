import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'fz_color';
const defaultColor = '#a5745b';
const blockData = {
  message0: 'colour %1',
  args0: [
    {
      type: 'field_input',
      name: 'COLOR',
      text: ''
    }
  ],
  output: 'Colour',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    var thisBlock = this;
    thisBlock.setColour(defaultColor);
  },
  onchange: function () {
    try {
      if (!this.getFieldValue('COLOR').length) {
        this.setColour(defaultColor);
      } else {
        this.setColour(this.getFieldValue('COLOR'));
      }
    } catch {
      this.setColour(defaultColor);
    }
  }
};

JavaScript[blockName] = function (block) {
  const color = block.getFieldValue('COLOR');
  const code = [`"${color}"`, JavaScript.ORDER_ATOMIC];
  return code;
};
