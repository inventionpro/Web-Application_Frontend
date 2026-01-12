import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock['add_command_dash'] = (block) => {
  var value_name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  var value_desc = javascriptGenerator.valueToCode(block, 'DESC', javascriptGenerator.ORDER_ATOMIC);
  var value_tutorial = javascriptGenerator.valueToCode(block, 'tutorial', javascriptGenerator.ORDER_ATOMIC);
  var code = `
    s4d.client.dashboard.registerCommand(${value_name}, ${value_desc}, ${value_tutorial});
`;
  return code;
};
