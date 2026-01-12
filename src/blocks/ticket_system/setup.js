import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'ticket_setup';

const blockData = {
  message0: 'Set ticket channel (mentioned channel)',
  args0: [],
  colour: '#D14081',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = function () {
  const code = `ticket.setup(s4dmessage, s4dmessage.mentions.channels.first().id);`;
  return code;
};
