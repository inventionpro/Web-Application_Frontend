import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'unbanned_event';

const blockData = {
  type: 'unbanned_event',
  message0: 'When a member is unbanned %1 %2',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'code'
    }
  ],
  colour: '#f79400',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['unbanned_event'] = function (block) {
  var statements_code = JavaScript.statementToCode(block, 'code');

  var code = `s4d.client.on(Discord.Events.GuildBanRemove, async (unban) => {\n ${statements_code} \n });\n`;
  return code;
};
