import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'inv_comment_code';

const blockData = {
  message0: 'Comment code, with comment %1 %2 %3',
  args0: [
    {
      type: 'field_input',
      name: 'NAME',
      text: 'comment'
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'NAME'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#deb40d',
  tooltip: 'Makes code inside into a comment aka code no workie',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = JavaScript.statementToCode(block, 'NAME');
  var code = `/*
  ${text_name}
  
  ${statements_name}
  */`;

  return code;
};
