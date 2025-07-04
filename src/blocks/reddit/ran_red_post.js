import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'ran_red_post';

const blockData = {
  message0: 'Get random reddit post from r/%1 then %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
      check: ['Number', 'String']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#5ba58b',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const message = JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  return `
S4D_APP_REDDIT_musakui(${message}).then(async (result) => {
   ${statementThen}
}).catch(error => console.log(error));
`;
};
