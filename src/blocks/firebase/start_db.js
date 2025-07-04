import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import '@blockly/field-grid-dropdown';

const blockName = 'start_db';

const blockData = {
  message0: 'start firebase, apiKey:%1 authDomain:%2 databaseURL:%3 projectId:%4 storageBucket:%5 messagingSenderId:%6 appId:%7 measurementId:%8',
  args0: [
    {
      type: 'input_value',
      name: 'apiKey',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'authDomain',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'databaseURL',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'projectId',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'storageBucket',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'messagingSenderId',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'appId',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'measurementId',
      check: ['String', 'Number']
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const apiKey = JavaScript.valueToCode(block, 'apiKey', JavaScript.ORDER_ATOMIC);
  const authDomain = JavaScript.valueToCode(block, 'authDomain', JavaScript.ORDER_ATOMIC);
  const databaseURL = JavaScript.valueToCode(block, 'databaseURL', JavaScript.ORDER_ATOMIC);
  const projectId = JavaScript.valueToCode(block, 'projectId', JavaScript.ORDER_ATOMIC);
  const storageBucket = JavaScript.valueToCode(block, 'storageBucket', JavaScript.ORDER_ATOMIC);
  const messagingSenderId = JavaScript.valueToCode(block, 'messagingSenderId', JavaScript.ORDER_ATOMIC);
  const appId = JavaScript.valueToCode(block, 'appId', JavaScript.ORDER_ATOMIC);
  const measurementId = JavaScript.valueToCode(block, 'measurementId', JavaScript.ORDER_ATOMIC);

  let code = `let firebaseConfig = {
    apiKey: ${apiKey},
    authDomain: ${authDomain},
    databaseURL: ${databaseURL},
    projectId: ${projectId},
    storageBucket: ${storageBucket},
    messagingSenderId: ${messagingSenderId},
    appId: ${appId},
    measurementId: ${measurementId}
  };\n
  let app = firebase.initializeApp(firebaseConfig);\n
  s4d.fire = firebase.getDatabase(app);\n`;
  return code;
};
