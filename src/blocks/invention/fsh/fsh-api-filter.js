import Blockly from 'blockly/core';

const blockName = 'inv_fsh_api_filter';

const blockData = {
  message0: 'are there bad words in %1',
  args0: [
    {
      type: 'input_value',
      name: 'NAME'
    }
  ],
  inputsInline: true,
  output: 'Boolean',
  colour: '#1a75ba',
  tooltip: 'Logic that tells you if text contains bad words',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `await _S4D_inventionFSHapi('filter?text=', ${value_url}, 'bad', false)`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
