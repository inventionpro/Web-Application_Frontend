import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_button_menu';

const blockData = {
  message0: '%{BKY_BUTTON_MENU} %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'OPTIONS'
    },

    {
      type: 'input_value',
      name: 'ID',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'PLACEHOLDER',
      check: ['String', 'Number']
    },
    {
      type: 'input_value',
      name: 'DISABLED',
      check: 'Boolean'
    }
  ],
  colour: '#4C97FF',
  output: 'ButtonMenu'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const placeholder = javascriptGenerator.valueToCode(block, 'PLACEHOLDER', javascriptGenerator.ORDER_ATOMIC);
  const statements = javascriptGenerator.statementToCode(block, 'OPTIONS');
  const disabled = javascriptGenerator.valueToCode(block, 'DISABLED', javascriptGenerator.ORDER_ATOMIC);
  var code = [
    `new Discord.ActionRowBuilder()
    .addComponents(
    new Discord.SelectMenuBuilder()
    .setCustomId(${id})
    .setPlaceholder(${placeholder})
    .setMaxValues(1)
    .setMinValues(1)
    .setDisabled(${disabled === null ? false : disabled})
    .addOptions(${statements}))\n`,
    javascriptGenerator.ORDER_NONE
  ];
  return code;
};
