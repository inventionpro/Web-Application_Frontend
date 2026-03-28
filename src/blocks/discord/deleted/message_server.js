import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';
import { Types } from '../../types.js';

const blockName = 's4d_message_server_deleted';
const blockData = {
  message0: '%{BKY_MESSAGE_GUILD}',
  colour: '#5BA58C',
  tooltip: '',
  output: Types.Server,
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = () => {
  return ['s4dmessage.guild', javascriptGenerator.ORDER_NONE];
};

registerRestrictions(blockName, [
  {
    type: 'toplevelparent',
    message: 'RES_MUST_BE_IN_ON_DELETED',
    types: ['s4d_on_deleted']
  }
]);
