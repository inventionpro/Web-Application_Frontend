import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_reply_add_reaction';

const blockData = {
  message0: '%{BKY_REPLY_ADD_REACTION}',
  args0: [
    {
      type: 'input_value',
      name: 'REACTION',
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

JavaScript[blockName] = function (block) {
  const reaction = JavaScript.valueToCode(block, 'REACTION', JavaScript.ORDER_ATOMIC);
  const code = `s4dreply.react(${reaction});\n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_ADD_REACTION_MISSING_REACTION',
    types: ['REACTION']
  },
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_REPLY_THEN',
    types: ['s4d_reply_then']
  }
]);
