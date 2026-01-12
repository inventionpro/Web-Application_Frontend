import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const apiKey = javascriptGenerator.valueToCode(block, 'apiKey', javascriptGenerator.ORDER_ATOMIC);
  const authDomain = javascriptGenerator.valueToCode(block, 'authDomain', javascriptGenerator.ORDER_ATOMIC);
  const databaseURL = javascriptGenerator.valueToCode(block, 'databaseURL', javascriptGenerator.ORDER_ATOMIC);
  const projectId = javascriptGenerator.valueToCode(block, 'projectId', javascriptGenerator.ORDER_ATOMIC);
  const storageBucket = javascriptGenerator.valueToCode(block, 'storageBucket', javascriptGenerator.ORDER_ATOMIC);
  const messagingSenderId = javascriptGenerator.valueToCode(block, 'messagingSenderId', javascriptGenerator.ORDER_ATOMIC);
  const appId = javascriptGenerator.valueToCode(block, 'appId', javascriptGenerator.ORDER_ATOMIC);
  const measurementId = javascriptGenerator.valueToCode(block, 'measurementId', javascriptGenerator.ORDER_ATOMIC);

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
