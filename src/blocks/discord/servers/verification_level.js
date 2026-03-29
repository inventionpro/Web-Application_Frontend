import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'set_verification_level';
const blockData = {
  type: 'set_verification_level',
  message0: '%1 verification level',
  args0: [
    {
      type: 'field_dropdown',
      name: 'NAME',
      options: [
        ['No', 'None'],
        ['Low', 'Low'],
        ['Medium', 'Medium'],
        ['High', 'High'],
        ['Very high', 'VeryHigh']
      ]
    }
  ],
  inputsInline: true,
  output: Types.Number,
  colour: '#2AC395',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['set_verification_level'] = (block) => {
  let dropdown = block.getFieldValue('NAME');
  return [`Discord.GuildVerificationLevel.${dropdown}`, javascriptGenerator.ORDER_NONE];
};
