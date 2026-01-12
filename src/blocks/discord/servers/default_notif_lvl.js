import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'default_notif_lvl';

const blockData = {
  type: 'default_notif_lvl',
  message0: '%1 notification level',
  args0: [
    {
      type: 'field_dropdown',
      name: 'NAME',
      options: [
        ['All messages', 'ALL_MESSAGES'],
        ['Only mention', 'ONLY_MENTIONS']
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
  ALL_MESSAGES: 0,
  ONLY_MENTIONS: 1
};
javascriptGenerator.forBlock['default_notif_lvl'] = (block) => {
  let dropdown = block.getFieldValue('NAME');
  let code = v13tov14[dropdown];
  return [code, javascriptGenerator.ORDER_NONE];
};
