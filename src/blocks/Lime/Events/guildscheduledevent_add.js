import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'lime_guild_sheduled_events_create';

const blockData = {
  type: 'lime_guild_sheduled_events_create',
  message0: 'When a scheduled event is created %1 %2',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  var statements_code = javascriptGenerator.statementToCode(block, 'code');

  var code = `s4d.client.on(Discord.Events.GuildScheduledEventCreate, async (scheduledEvent) => {\n ${statements_code} \n });\n`;
  return code;
};
