import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_search';

const blockData = {
  message0: '%{BKY_SEARCH}',
  args0: [
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    },
    {
      type: 'input_value',
      name: 'STRING',
      check: 'String'
    }
  ],
  output: 'MusicSearch',
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const string = javascriptGenerator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_ATOMIC);
  const member = javascriptGenerator.valueToCode(block, 'MEMBER', javascriptGenerator.ORDER_ATOMIC);
  return [`await s4d.player.search(${string}, {requestedBy: ${member}}).then(x => x.tracks[0])`, javascriptGenerator.ORDER_NONE];
};
