import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_delete_guild';

const blockData = {
  message0: 'Delete server %1',
  inputsInline: true,
  args0: [
    {
      type: 'input_value',
      name: 'Server',
      check: 'Server'
    }
  ],
  colour: '#0c97f0',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Deletes a server. Only works if the owner is the bot itself.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_delete_guild'] = function (block) {
  var value_server = JavaScript.valueToCode(block, 'Server', JavaScript.ORDER_ATOMIC);
  var code = `${value_server}.delete()\n`;
  return code;
};
