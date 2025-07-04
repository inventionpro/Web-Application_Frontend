import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const string = JavaScript.valueToCode(block, 'STRING', JavaScript.ORDER_ATOMIC);
  const member = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  return [`await s4d.player.search(${string}, {requestedBy: ${member}}).then(x => x.tracks[0])`, JavaScript.ORDER_NONE];
};
