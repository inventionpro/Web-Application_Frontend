import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

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

javascriptGenerator.forBlock[blockName] = (block) => {
  const statements = javascriptGenerator.statementToCode(block, 'BUTTONS');
  var code = [`new MessageActionRow()\n.addComponents(${statements})`, javascriptGenerator.ORDER_NONE];
  return code;
};
