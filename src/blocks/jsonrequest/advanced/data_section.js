import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_data_section';

const blockData = {
  message0: '%1 data section %2 %3',
  inputsInline: false,
  args0: [
    {
      type: 'field_input',
      name: 'LABEL',
      text: 'body'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Create a data section to send it to the API. If the API asks for something like data from the request body, this section would be named body and data with values would go inside.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const LABEL = block.getFieldValue('LABEL');
  const STATEMENTS = JavaScript.statementToCode(block, 'STATEMENTS');
  const code = `${LABEL.replaceAll(' ', '_').replace(/[!@#\$%\^&\*\(\)-=\]\[\|{}\+`~'":;\?\/\.<>,\/]/g, '_')}: {
           ${STATEMENTS}
        },
    `;
  return code;
};
