import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'undeaf_member';

const blockData = {
  message0: 'undeaf member with id %1',
  args0: [
    {
      type: 'input_value',
      name: 'id',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#4C97FF',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'id', javascriptGenerator.ORDER_ATOMIC);
  const code = `
s4dmessage.channel.members.forEach(member => {if(member.id === ${id}){member.voice.setDeaf(false)}});`;
  return code;
};
