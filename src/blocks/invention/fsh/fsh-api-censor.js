import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'inv_fsh_api_censor';

const blockData = {
  message0: 'in text %1 censor bad words',
  args0: [
    {
      type: 'input_value',
      name: 'NAME'
    }
  ],
  inputsInline: true,
  output: 'String',
  colour: '#1a75ba',
  tooltip: 'Responds with censored version of text inputed',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var value_url = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_ATOMIC);

  var code = `await _S4D_inventionFSHapi('filter?text=', ${value_url}, 'censor', ${value_url})`;

  return [code, JavaScript.ORDER_NONE];
};
