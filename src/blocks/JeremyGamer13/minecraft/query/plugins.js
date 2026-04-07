import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'jg_minecraft_query_plugin_list';
const blockData = {
  message0: '%1 java server plugin list',
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
  output: Types.Array,
  tooltip: 'Gets the plugins on the server and puts them in a list. Only works if the server has enabled Query.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['result_query_java.plugins', javascriptGenerator.ORDER_NONE];
};
