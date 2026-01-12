import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'set_verification_level';

const blockData = {
  type: 'set_verification_level',
  message0: '%1 verification level',
  args0: [
    {
      type: 'field_dropdown',
      name: 'NAME',
      options: [
        ['No', 'NONE'],
        ['Low', 'LOW'],
        ['Medium', 'MEDIUM'],
        ['High', 'HIGH'],
        ['Very high', 'VERY_HIGH']
      ]
    }
  ],
  inputsInline: true,
  output: null,
  colour: '#2AC395',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

const v13tov14 = {
  NONE: 0,
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  VERY_HIGH: 4
};
javascriptGenerator.forBlock['set_verification_level'] = (block) => {
  let dropdown = block.getFieldValue('NAME');
  let code = v13tov14[dropdown];
  return [code, javascriptGenerator.ORDER_NONE];
};
