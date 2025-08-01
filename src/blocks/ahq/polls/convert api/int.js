import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../../restrictions';

const blockName = 'convert_api_code';

const blockData = {
  type: 'block_type',
  message0: 'Load convert api %1 api key %2 ',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'api',
      check: 'String'
    }
  ],
  colour: '#0EB22B',
  tooltip: "Load the CloudConvert API. You'll need to get an API key from their website. This block should only be placed once.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = `const CloudConvert = require('cloudconvert');
    const ahqfs = require("fs");
    const cloudConvert = new CloudConvert(${JavaScript.valueToCode(block, 'api', JavaScript.ORDER_ATOMIC)});`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['api']
  }
]);
