import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_set_bot_game';
const blockData = {
  message0: '%{BKY_SET_BOT_GAME}',
  args0: [
    {
      type: 'input_value',
      name: 'GAME',
      check: Types.String
    },
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['%{BKY_STATUS_TYPE_PLAYING}', 'PLAYING'],
        ['%{BKY_STATUS_TYPE_LISTENING}', 'LISTENING'],
        ['%{BKY_STATUS_TYPE_WATCHING}', 'WATCHING'],
        ['%{BKY_STATUS_TYPE_COMPETING}', 'COMPETING']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'OIFD',
      options: [
        ['%{BKY_STATUS_ONLINE}', 'online'],
        ['%{BKY_STATUS_IDLE}', 'idle'],
        ['%{BKY_STATUS_DND}', 'dnd'],
        ['%{BKY_STATUS_OFFLINE}', 'offline']
      ]
    }
  ],
  colour: '#4C97FF',
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  tooltip: "Set your bot's status.",
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block
    .getFieldValue('TYPE')
    .toLowerCase()
    .replace(/^./, (match) => match.toUpperCase());
  const game = javascriptGenerator.valueToCode(block, 'GAME', javascriptGenerator.ORDER_ATOMIC);
  const OIFD = block.getFieldValue('OIFD');
  return `s4d.client.user.setPresence({
  status: '${OIFD}',
  activities: [{
    name: ${game},
    type: Discord.ActivityType.${type}
  }]
});`;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_GAME',
    types: ['GAME']
  }
]);
