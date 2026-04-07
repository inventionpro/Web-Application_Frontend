import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'jg_minecraft_query_software';
const blockData = {
  message0: '%1 java server software',
  args0: [
    {
      type: 'field_image',
      src: 'https://www.gstatic.com/codesite/ph/images/star_on.gif',
      width: 15,
      height: 15,
      alt: '*',
      flipRtl: false
    }
  ],
  colour: 85,
  output: Types.String,
  tooltip: 'Get the software the server uses. Only works if the server has enabled Query.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['result_query_java.software', javascriptGenerator.ORDER_NONE];
};
