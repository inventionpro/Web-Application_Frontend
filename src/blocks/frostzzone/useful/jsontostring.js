import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_json_to_string';

const blockData = {
  message0: 'Convert object/list %1 to json string',
  args0: [
    {
      type: 'input_value',
      name: 'STRING',
      check: ['Object', 'List', 'Array', 'JSON', 'Member', 'Server', 'Channel', 'Emoji', 'Role', null]
    }
  ],
  output: 'String',
  colour: '#BA4A9A',
  tooltip: 'Converts Object/lists to a json string',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const code = JavaScript.valueToCode(block, 'STRING', JavaScript.ORDER_ATOMIC);
  return [`JSON.stringify(${code})`, JavaScript.ORDER_NONE];
};
