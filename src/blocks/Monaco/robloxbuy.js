import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_roblox_buy';

const blockData = {
  message0: '%1 Buy asset with ID %2',
  inputsInline: true,
  args0: [
    {
      type: 'field_image',
      src: 'https://www.gstatic.com/codesite/ph/images/star_on.gif',
      width: 15,
      height: 15,
      alt: '*',
      flipRtl: false
    },
    {
      type: 'input_value',
      name: 'id',
      check: 'Number'
    }
  ],
  colour: 10,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Buy a roblox item with it's id.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_roblox_buy'] = function (block) {
  var value_id = JavaScript.valueToCode(block, 'id', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `S4D_APP_NOBLOX.buy(Number(${value_id}))\n`;
  return code;
};
