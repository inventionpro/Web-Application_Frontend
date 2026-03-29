import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import '@blockly/field-grid-dropdown';
import { Types } from '../../types.js';

const blockName = 'set_server_something';
const blockData = {
  type: 'set_server_something',
  message0: 'Set server %1 %2 to %3 with reason %4 on server %5',
  args0: [
    {
      type: 'field_grid_dropdown',
      name: 'parameter',
      options: [
        ['AFK channel', 'AFK_CHANNEL'],
        ['AFK channel timeout', 'AFK_CHANNEL_TIMEOUT'],
        ['banner', 'SET_BANNER'],
        ['default notifications', 'DEFAULT_NOTIFICATIONS'],
        ['discovery spash', 'DISCOVERY_SPLASH'],
        ['explicit content filter', 'EXPL_CONT_FILTER'],
        ['icon', 'ICON'],
        ['name', 'NAME'],
        ['owner', 'OWNER'],
        ['public update channel', 'PUB_UPD_CHANNEL'],
        ['rules channel', 'RULES_CHANNEL'],
        ['invite image', 'SPLASH'],
        ['system channel', 'SYS_CHANNEL'],
        ['verification level', 'VERIF_LVL']
      ]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'value'
    },
    {
      type: 'input_value',
      name: 'reason',
      check: Types.String
    },
    {
      type: 'input_value',
      name: 'server'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#43BBF3',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['set_server_something'] = (block) => {
  var parameters = block.getFieldValue('parameter');
  var value = javascriptGenerator.valueToCode(block, 'value', javascriptGenerator.ORDER_ATOMIC);
  var reason = javascriptGenerator.valueToCode(block, 'reason', javascriptGenerator.ORDER_ATOMIC);
  var server = javascriptGenerator.valueToCode(block, 'server', javascriptGenerator.ORDER_ATOMIC);
  switch (parameters) {
    case 'AFK_CHANNEL_TIMEOUT':
      return `${server}.setAFKTimeout(${value}, ${reason});`;
    case 'AFK_CHANNEL':
      return `${server}.setAFKChannel(${value}, ${reason});`;
    case 'SET_BANNER':
      return `${server}.setBanner(${value}, ${reason});`;
    case 'DEFAULT_NOTIFICATIONS':
      return `${server}.setDefaultMessageNotifications(${value}, ${reason});`;
    case 'DISCOVERY_SPLASH':
      return `${server}.setDiscoverySplash(${value}, ${reason});`;
    case 'EXPL_CONT_FILTER':
      return `${server}.setExplicitContentFilter(${value}, ${reason});`;
    case 'ICON':
      return `${server}.setIcon(${value}, ${reason});`;
    case 'NAME':
      return `${server}.setName(${value}, ${reason});`;
    case 'OWNER':
      return `${server}.setOwner(${value}, ${reason});`;
    case 'PUB_UPD_CHANNEL':
      return `${server}.setPublicUpdatesChannel(${value}, ${reason}) ;`;
    case 'RULES_CHANNEL':
      return `${server}.setRulesChannel(${value}, ${reason});`;
    case 'SPLASH':
      return `${server}.setSplash(${value}, ${reason});`;
    case 'SYS_CHANNEL':
      return `${server}.setSystemChannel(${value}, ${reason});`;
    case 'VERIF_LVL':
      return `${server}.setVerificationLevel(${value}, ${reason});`;
  }
};
