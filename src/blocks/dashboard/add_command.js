import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'add_command_dash';

const blockData = {
  type: 'add_command_dash',
  message0: 'Add a new command with %1 Name %2 Description %3 Command usage %4',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'NAME'
    },
    {
      type: 'input_value',
      name: 'DESC'
    },
    {
      type: 'input_value',
      name: 'tutorial'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 257,
  tooltip: '',
  helpUrl: ''
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['add_command_dash'] = function (block) {
  var value_name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);
  var value_desc = JavaScript.valueToCode(block, 'DESC', JavaScript.ORDER_ATOMIC);
  var value_tutorial = JavaScript.valueToCode(block, 'tutorial', JavaScript.ORDER_ATOMIC);
  var code = `
    s4d.client.dashboard.registerCommand(${value_name}, ${value_desc}, ${value_tutorial});
`;
  return code;
};
