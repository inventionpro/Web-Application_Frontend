import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_set_bot_game';

const blockData = {
  message0: '%{BKY_SET_BOT_GAME}',
  args0: [
    {
      type: 'input_value',
      name: 'GAME',
      check: 'String'
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

JavaScript[blockName] = function (block) {
  const type = block
    .getFieldValue('TYPE')
    .toLowerCase()
    .replace(/^./, function (match) {
      return match.toUpperCase();
    });
  const game = JavaScript.valueToCode(block, 'GAME', JavaScript.ORDER_ATOMIC);
  const OIFD = block.getFieldValue('OIFD');
  const code = `s4d.client.user.setPresence({
  status: '${OIFD}',
  activities: [{
    name: ${game},
    type: Discord.ActivityType.${type}
  }]
});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_GAME',
    types: ['GAME']
  }
]);
