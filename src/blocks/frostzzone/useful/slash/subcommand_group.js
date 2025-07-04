import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_slash_sub_command_group';

const blockData = {
  message0: 'Create slash Sub Command group Name %1 Description %2 %3 Sub Commands %4',
  args0: [
    {
      type: 'input_value',
      name: 'NAME',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'DESC',
      check: 'String'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'OPTIONS'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4180d9',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var desc = JavaScript.valueToCode(block, 'DESC', JavaScript.ORDER_ATOMIC);
  var options = JavaScript.statementToCode(block, 'OPTIONS');
  var code = `{
    name: ${name.toLowerCase()},
		description: ${desc},
    type: 2,
		options: [
      ${options}
    ]
},`;
  return code;
};
