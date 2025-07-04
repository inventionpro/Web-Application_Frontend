import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'embed_send_round';

const blockData = {
  message0: 'send embed %1',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: 'String'
    }
  ],
  colour: '#54CF83',
  output: '',
  tooltip: 'Send the named embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  var name = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  name = name.split(' ');
  name = name.join('_');
  name = name.toLowerCase();
  name = name.replace("'", '').replace("'", '');
  const code = [`embeds: [${name}]`, JavaScript.ORDER_ATOMIC];
  return code;
};
