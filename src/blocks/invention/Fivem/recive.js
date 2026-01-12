import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'inv_fivem_recive';

const blockData = {
  message0: 'retrive %1',
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
    }
  ],
  output: 'Array',
  colour: '#CC8899',
  tooltip: 'retrives value from get',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  var dropdown_get = block.getFieldValue('get');
  var code = `__S4D__${dropdown_get}`;
  return [code, javascriptGenerator.ORDER_NONE];
};
