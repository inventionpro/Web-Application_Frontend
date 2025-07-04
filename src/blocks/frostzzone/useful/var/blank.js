import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'blank';

const blockData = {
  message0: '⠀ %1 ⠀',
  args0: [
    {
      type: 'field_input',
      name: 'TEXT',
      text: ''
    }
  ],
  output: null,
  colour: '#a55b80',
  tooltip: 'Insert text'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var text = block.getFieldValue('TEXT');
  var code = `${text}`;
  return [code, JavaScript.ORDER_ATOMIC];
};
