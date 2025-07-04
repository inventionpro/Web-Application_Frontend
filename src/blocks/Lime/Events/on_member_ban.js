import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'banned_event';

const blockData = {
  type: 'banned_event',
  message0: 'When a member is banned %1 %2',
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

JavaScript['banned_event'] = function (block) {
  var statements_code = JavaScript.statementToCode(block, 'code');

  var code = `s4d.client.on('guildBanAdd', async (ban) => {\n ${statements_code} \n });\n`;
  return code;
};
