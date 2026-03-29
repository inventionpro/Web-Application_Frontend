import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'default_notif_lvl';
const blockData = {
  type: 'default_notif_lvl',
  message0: '%1 notification level',
  args0: [
    {
      type: 'field_dropdown',
      name: 'NAME',
      options: [
        ['All messages', 'AllMessages'],
        ['Only mention', 'OnlyMentions']
      ]
    }
  ],
  inputsInline: true,
  output: Types.Any,
  colour: '#2AC395',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['default_notif_lvl'] = (block) => {
  let dropdown = block.getFieldValue('NAME');
  return [`Discord.GuildDefaultMessageNotifications.${dropdown}`, javascriptGenerator.ORDER_NONE];
};
