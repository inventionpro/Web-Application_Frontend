import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'inv_fivem_get';

const blockData = {
  message0: 'get %1 then %2 %3',
  args0: [
    {
      type: 'field_dropdown',
      name: 'get',
      options: [
        ['Server status', 'getServerStatus'],
        ['Players', 'getPlayers'],
        ['Players online', 'getPlayersOnline'],
        ['Max players', 'getMaxPlayers'],
        ['Server resources', 'getServerResources'],
        ['Server locale', 'getServerLocale'],
        ['Server version', 'getServerVersion'],
        ['Server tags', 'getServerTags'],
        ['License key (dangerous)', 'getLicenseKey']
      ]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'then'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#CC8899',
  tooltip: 'Gets something in the fivem server',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  var dropdown_get = block.getFieldValue('get');
  var statements_then = JavaScript.statementToCode(block, 'then');
  var code = `__S4D__fivem_server.${dropdown_get}().then(async (__S4D__${dropdown_get}) => {
    ${statements_then}
  });`;
  return code;
};
