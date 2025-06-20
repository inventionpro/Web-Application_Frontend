//result_java

import Blockly from 'blockly/core';

const blockName = 'jg_minecraft_query_map';

const blockData = {
  message0: '%1 java server map',
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
  output: 'String',
  tooltip: 'Get the map of the server. Only works if the server has enabled Query.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  const code = `result_query_java.map`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
