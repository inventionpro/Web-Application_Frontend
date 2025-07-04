import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'jg_web_keynumber';

const blockData = {
  message0: 'Key number %1',
  args0: [
    {
      type: 'input_value',
      name: 'datafile',
      check: 'Number'
    }
  ],
  colour: 230,
  output: null,
  tooltip: 'Grabs the value of the key that is numbered.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const datafile = JavaScript.valueToCode(block, 'datafile', JavaScript.ORDER_ATOMIC);
  const code = [`(Object.keys(JSONdataS4D)[${datafile} - 1])`, JavaScript.ORDER_NONE];
  return code;
};
