import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'gsa_ytdl_info';

const blockData = {
  message0: 'get info from url %1 then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'url'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: 'gets the videos info',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const url = JavaScript.valueToCode(block, 'url', JavaScript.ORDER_ATOMIC);
  const statements = JavaScript.statementToCode(block, 'STATEMENTS', JavaScript.ORDER_ATOMIC);
  return `let S4D_APP_YTDL_JSON = await ytdl.getInfo(${url})
${statements}
`;
};
