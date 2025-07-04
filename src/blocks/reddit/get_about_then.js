import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'get_about_then';

const blockData = {
  message0: "Get User %1 Reddit's data then %2 %3",
  args0: [
    {
      type: 'input_value',
      name: 'USER',
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
  const user = JavaScript.valueToCode(block, 'USER', JavaScript.ORDER_ATOMIC);
  const statementThen = JavaScript.statementToCode(block, 'THEN');
  const code = `
https.get('https://www.reddit.com/user/' + ${user} + '/about.json', async resp => {
    let data2 = "";
    resp.on("data", async chunk => {
        data2 += chunk;
    }); 
    resp.on("end", async () => {
        let info = JSON.parse(data2)
        ${statementThen}                           
    });
})
`;
  return code;
};
