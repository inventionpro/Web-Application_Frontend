import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../restrictions';

const blockName = 's4d_run_save_output';

const blockData = {
  message0: '%{BKY_RUN_SAVE_OUTPUT}',
  args0: [
    {
      type: 'input_statement',
      name: 'STATEMENT',
      check: 'RunnableActionWithResult'
    },
    {
      type: 'field_variable',
      name: 'VAR',
      variable: null
    }
  ],
  colour: '#D14081',
  tooltip: '',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const code = `${JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE)} = await ${JavaScript.statementToCode(block, 'STATEMENT')}`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'custom',
    message: "The 'run' block must encapsulate exactly one statement",
    code: 'if (block.getFirstStatementConnection().isConnected()) _return = !block.getFirstStatementConnection().targetBlock().getNextBlock(); else _return = false;'
  }
]);
