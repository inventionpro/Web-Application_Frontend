import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_edit_giveaway';

const blockData = {
  message0: '%{BKY_EDIT_GIVEAWAY}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'DURATION',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'WINNERS',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'PRIZE',
      check: ['String', 'Number']
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: false
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'THEN');
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const duration = javascriptGenerator.valueToCode(block, 'DURATION', javascriptGenerator.ORDER_ATOMIC);
  const winnecount = javascriptGenerator.valueToCode(block, 'WINNERS', javascriptGenerator.ORDER_ATOMIC);
  const prize = javascriptGenerator.valueToCode(block, 'PRIZE', javascriptGenerator.ORDER_ATOMIC);
  var code = `s4d.manager.start(${id},{addTime: ${duration},newWinnerCount: ${winnecount},newPrize: ${prize}}).then(async (gData) => {\n${statements}\n});\n`;
  return code;
};
