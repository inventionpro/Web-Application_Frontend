import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_pause_giveaway';

const blockData = {
  message0: '%{BKY_PAUSE_GIVEAWAY}',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
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
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'THEN');
  const id = JavaScript.valueToCode(block, 'ID', JavaScript.ORDER_ATOMIC);
  var code = `s4d.manager.pause(${id}).then(async () => {\n${statements}\n});\n`;
  return code;
};
