import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'get_cpu_uptime';

const blockData = {
  message0: 'Get CPU Usage then %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#a5745b',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statementThen = JavaScript.statementToCode(block, 'THEN');

  const code = `
        os.cpuUsage(async function(v){
	      var obj = v * 100
        ${statementThen}   
});      
`;

  return code;
};
