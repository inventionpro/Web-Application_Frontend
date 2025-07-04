import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'act_voice';

const blockData = {
  message0: '%1 member %2 %3 to channel/mute status %4',
  args0: [
    {
      type: 'field_dropdown',
      name: 'action',
      options: [
        ['Move', 'setChannel'],
        ['Deafen', 'setDeaf'],
        ['Mute', 'setMute']
      ]
    },
    {
      type: 'field_dropdown',
      name: 'test',
      options: [['Voice Member', 'newState']]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'r',
      check: ['VoiceChannel', 'Boolean']
    }
  ],
  colour: '#40BF4A',
  tooltip: 'Only Works with channel join & channel switch',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const code = `newState.${block.getFieldValue('action')}(${JavaScript.valueToCode(block, 'r', JavaScript.ORDER_ATOMIC || null)})`;
  return code;
};
