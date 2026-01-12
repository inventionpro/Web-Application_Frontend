import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'inv_fsh_api_animal2';

const blockData = {
  message0: 'get random %1 image',
  args0: [
    {
      type: 'input_value',
      name: 'NAME'
    }
  ],
  output: 'String',
  colour: '#50494e',
  tooltip: 'Gets a random animal picture (link) from the fsh api',
  helpUrl: 'https://api.fsh.plus/animal'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var value_url = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);

  var code = `await _S4D_inventionFSHapi('animal?animal=', ${value_url}, 'image', '')`;

  return [code, javascriptGenerator.ORDER_NONE];
};
