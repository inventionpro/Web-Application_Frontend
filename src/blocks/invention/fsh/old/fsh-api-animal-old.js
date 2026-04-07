import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'inv_fsh_api_animal';
const blockData = {
  message0: 'get a random image of %1 from the fsh api (old block, use new)',
  args0: [
    {
      type: 'field_input',
      name: 'TYPE',
      text: 'cat'
    }
  ],
  output: Types.String,
  colour: '#50494e',
  tooltip: 'this is a old version of fsh api animal image block (should still work but will not recive further updates)',
  helpUrl: 'https://api.fsh.plus/animal'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var text_type = block.getFieldValue('TYPE');
  return [`await _S4D_inventionFSHapi('animal?animal=', ${text_type}, 'image', '')`, javascriptGenerator.ORDER_NONE];
};
