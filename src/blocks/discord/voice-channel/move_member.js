import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'move_member';

const blockData = {
  message0: 'mute member with id %1 voice channel %2',
  args0: [
    {
      type: 'input_value',
      name: 'id',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'vc',
      check: 'Channel'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  Tooltip: 'for voice channel you use get Channel + voice channel id',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.Tooltip = 'for voice channel you use get Channel + voice channel id';
  }
};

JavaScript[blockName] = function (block) {
  const id = JavaScript.valueToCode(block, 'id', JavaScript.ORDER_ATOMIC);
  const vc = JavaScript.valueToCode(block, 'vc', JavaScript.ORDER_ATOMIC);
  const code = `
s4dmessage.channel.members.forEach(member => {if(member.id === ${id}){member.voice.setChannel(${vc})}});`;
  return code;
};
