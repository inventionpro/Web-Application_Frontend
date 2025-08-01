import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_request_advanced_send_request';

const blockData = {
  message0: 'send request to URL %1 using method %2 and headers %7 %3 with body content %8 %4 then %9 %5 if error %10 %6',
  inputsInline: false,
  args0: [
    {
      type: 'input_value',
      name: 'URL',
      check: ['String', 'var', 'Env']
    },
    {
      type: 'field_dropdown',
      name: 'METHOD',
      options: [
        ['GET', '"get"'],
        ['POST', '"post"'],
        ['PUT', '"put"'],
        ['PATCH', '"patch"'],
        ['DELETE', '"delete"'],
        ['HEAD', '"head"'],
        ['OPTIONS', '"options"']
      ]
    },
    {
      type: 'input_statement',
      name: 'HEADERS'
    },
    {
      type: 'input_statement',
      name: 'BODY'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    },
    {
      type: 'input_statement',
      name: 'IF_ERROR'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Send an advanced request to a URL for an API, server or site that requires extra information.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const URL = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_ATOMIC);
  const METHOD = block.getFieldValue('METHOD');
  const HEADERS = JavaScript.statementToCode(block, 'HEADERS');
  const BODY = JavaScript.statementToCode(block, 'BODY');
  const THEN = JavaScript.statementToCode(block, 'THEN');
  const IF_ERROR = JavaScript.statementToCode(block, 'IF_ERROR');
  const code = `S4D_APP_PKG_axios({
        method: ${METHOD},
        url: ${URL},
        headers: {
           ${HEADERS}
        },
        body: {
          ${BODY}
        },
      })
      .then(async function (response) {
        ${THEN}
      })
      .catch(async function (err) {
        ${IF_ERROR}
      });
    `;
  return code;
};
