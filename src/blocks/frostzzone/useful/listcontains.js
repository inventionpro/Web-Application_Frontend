import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'list_contains';

const blockData = {
  message0: 'list %1 contains %2',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'LIST',
      check: 'Array'
    },
    {
      type: 'input_value',
      name: 'NAME',
      check: ['Number', 'String']
    }
  ],
  output: 'Boolean',
  colour: '%{BKY_LISTS_HUE}',
  inline: true,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var value_list = JavaScript.valueToCode(block, 'LIST', JavaScript.ORDER_ATOMIC);
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);

  var code = `${value_list}.includes(${value_name})`;

  return [code, JavaScript.ORDER_NONE];
};
