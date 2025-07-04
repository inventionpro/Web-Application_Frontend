import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_try_and_catch';

const blockData = {
  message0: 'try %1 %2 if error %3 %4',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'try'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'catch'
    }
  ],
  colour: '#D14081',
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
  const tryy = JavaScript.statementToCode(block, 'try');
  const catchh = JavaScript.statementToCode(block, 'catch');
  return `try{
        ${tryy}
    }catch(err){
        ${catchh}
    };
    `;
};
