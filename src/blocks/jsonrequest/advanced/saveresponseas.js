import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions.js';

const blockName = 'jg_web_request_advanced_save_downloadable_response_as';

const blockData = {
  message0: 'save downloadable response as %1',
  inputsInline: false,
  args0: [
    {
      type: 'input_value',
      name: 'FILE',
      check: ['String', 'var', 'Env']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'If the response is downloadable, download the file that the response sends back.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const FILE = javascriptGenerator.valueToCode(block, 'FILE', javascriptGenerator.ORDER_ATOMIC);
  const code = `response.data.pipe(fs.createWriteStream(String(${FILE})))
`;
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'dropdownofparent',
    message: '$The request needs to mark the response as downloadable!',
    option: 'IMAGEORNOT',
    equals: "responseType: 'stream',"
  }
]);
