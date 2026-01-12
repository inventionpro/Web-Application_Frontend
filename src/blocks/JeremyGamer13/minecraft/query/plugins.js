import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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
  output: ['Array', 'List'],
  tooltip: 'Gets the plugins on the server and puts them in a list. Only works if the server has enabled Query.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = `result_query_java.plugins`;
  return [code, javascriptGenerator.ORDER_NONE];
};
