import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'scratch_get_about_then';

const blockData = {
  message0: 'Get Users %1 Scratch profile then %2 %3',
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
  const code = `https.get('https://api.scratch.mit.edu/users/' + ${user}, async resp => {
      let data2 = "";
       resp.on("data", async chunk => {
       data2 += chunk;
      }); resp.on("end", async () => {
        let data = JSON.parse(data2)
        ${statementThen}
                              });
                          })
                          .on("error", async err => {
                console.log("Error: " + err.message);
            });`;
  return code;
};
