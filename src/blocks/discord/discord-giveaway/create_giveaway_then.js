import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'THEN');
  const channel = JavaScript.valueToCode(block, 'CHANNEL', JavaScript.ORDER_ATOMIC);
  const duration = JavaScript.valueToCode(block, 'DURATION', JavaScript.ORDER_ATOMIC);
  const winnecount = JavaScript.valueToCode(block, 'WINNERS', JavaScript.ORDER_ATOMIC);
  const prize = JavaScript.valueToCode(block, 'PRIZE', JavaScript.ORDER_ATOMIC);
  var code = `s4d.manager.start(${channel}, {duration:ms(${duration}),winnerCount:Number(${winnecount}),prize:${prize}}).then(async (gData) => {\n${statements}\n});\n`;
  return code;
};
