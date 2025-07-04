import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_button_row';

const blockData = {
  message0: 'button row %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'BUTTONS'
    }
  ],
  colour: '#4C97FF',
  output: 'ButtonRow'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'BUTTONS');
  var code = [`new MessageActionRow()\n.addComponents(${statements})`, JavaScript.ORDER_NONE];
  return code;
};
