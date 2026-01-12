import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_create_giveaway';

const blockData = {
  message0: '%{BKY_CREATE_GIVEAWAY}',
  args0: [
    {
      type: 'input_value',
      name: 'CHANNEL',
      check: 'Channel'
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
  const channel = javascriptGenerator.valueToCode(block, 'CHANNEL', javascriptGenerator.ORDER_ATOMIC);
  const duration = javascriptGenerator.valueToCode(block, 'DURATION', javascriptGenerator.ORDER_ATOMIC);
  const winnecount = javascriptGenerator.valueToCode(block, 'WINNERS', javascriptGenerator.ORDER_ATOMIC);
  const prize = javascriptGenerator.valueToCode(block, 'PRIZE', javascriptGenerator.ORDER_ATOMIC);
  var code = `s4d.manager.start(${channel}, {duration:ms(${duration}),winnerCount:Number(${winnecount}),prize:${prize}}).then(async (gData) => {\n${statements}\n});\n`;
  return code;
};
