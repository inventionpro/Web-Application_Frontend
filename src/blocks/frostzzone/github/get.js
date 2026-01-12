import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'github_get_then';

const blockData = {
  message0: 'Get Users %1 github %2 then - %3 %4',
  args0: [
    {
      type: 'input_value',
      name: 'USER',
      check: ['Number', 'String']
    },
    {
      type: 'field_dropdown',
      name: 'what',
      options: [['Profile', '']]
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const user = javascriptGenerator.valueToCode(block, 'USER', javascriptGenerator.ORDER_ATOMIC);
  const what = javascriptGenerator.valueToCode(block, 'what', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  const code = `https.get('https://api.github.com/users/' + ${user} + '/' + ${what}, async resp => {
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
            });
        
`;
  return code;
};
