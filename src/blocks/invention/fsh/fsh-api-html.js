import Blockly from 'blockly/core';

const blockName = 'lars-inv_fsh_api_html';

const blockData = {
  message0: 'Get HTML from %1',
  args0: [
    {
      type: 'input_value',
      name: 'url',
      align: 'CENTRE'
    }
  ],
  inputsInline: true,
  output: 'String',
  colour: '#1a75ba',
  tooltip: 'Gets the html code of a website (e.g. https://google.com)',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `await _S4D_inventionFSHapi('html?url=', ${value_url}, '', '')`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
