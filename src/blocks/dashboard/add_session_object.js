import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'new_session_obj';

const blockData = {
  type: 'new_session_obj',
  message0: 'Make a new session object %1 Secret %2 Resave %3 Save Uninitialized %4 --- Cookies --- %5 Secure (transmit cookies over https) %6 Http Only %7 Max Session Age (minutes) %8',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'sekret'
    },
    {
      type: 'input_value',
      name: 'resave',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'saveUninitialized',
      check: 'Boolean'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'secure',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'httpOnly',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'maxAge',
      check: 'Number'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 260,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['new_session_obj'] = (block) => {
  var value_sekret = javascriptGenerator.valueToCode(block, 'sekret', javascriptGenerator.ORDER_ATOMIC);
  var value_resave = javascriptGenerator.valueToCode(block, 'resave', javascriptGenerator.ORDER_ATOMIC);
  var value_saveuninitialized = javascriptGenerator.valueToCode(block, 'saveUninitialized', javascriptGenerator.ORDER_ATOMIC);
  var value_secure = javascriptGenerator.valueToCode(block, 'secure', javascriptGenerator.ORDER_ATOMIC);
  var value_httponly = javascriptGenerator.valueToCode(block, 'httpOnly', javascriptGenerator.ORDER_ATOMIC);
  var value_maxage = javascriptGenerator.valueToCode(block, 'maxAge', javascriptGenerator.ORDER_ATOMIC);
  var code = `
    const sessionObject = {
        secret: ${value_sekret},
        resave: ${value_resave},
        saveUninitialized: ${value_saveuninitialized},
        cookie: {
            secure: ${value_secure},
            httpOnly: ${value_httponly},
            maxAge: ${value_maxage} * 60000
        }
    };
`;
  return code;
};
