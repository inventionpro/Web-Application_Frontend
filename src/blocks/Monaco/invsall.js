import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'monaco_all_invites';

const blockData = {
  type: 'monaco_all_invites',
  message0: 'all invites in server %1',
  args0: [
    {
      type: 'input_value',
      name: 'server',
      check: 'Server'
    }
  ],
  colour: '#4C97FF',
  output: 'Invites',
  inputsInline: true,
  tooltip: 'Get all invites created.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['monaco_all_invites'] = function (block) {
  var value_server = JavaScript.valueToCode(block, 'server', JavaScript.ORDER_ATOMIC);
  var code = `${value_server}.invites.fetch()`;
  return [code, JavaScript.ORDER_NONE];
};
