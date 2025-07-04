import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'unarchieve_ticket';

const blockData = {
  message0: 'Unarchive the ticket (message channel)',
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

JavaScript[blockName] = function () {
  const code = `ticket.unarchive(s4dmessage.channel);`;
  return code;
};
