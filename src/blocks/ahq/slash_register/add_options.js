import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_reg_slash_options';

const blockData = {
  message0: 'Set slash cmd options name %1 set Description %2 required? %3 type %4',
  args0: [
    {
      type: 'input_value',
      name: 'Server',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'args',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'ahq',
      checl: 'Boolean'
    },
    {
      type: 'field_dropdown',
      name: 'Label',
      options: [
        ['SUB_COMMAND', '1'],
        ['SUB_COMMAND_GROUP', '2'],
        ['STRING', '3'],
        ['INTEGER', '4'],
        ['BOOLEAN', '5'],
        ['USER', '6'],
        ['CHANNEL', '7'],
        ['ROLE', '8'],
        ['MENTIONABLE', '9'],
        ['NUMBER', '10']
      ]
    }
  ],
  colour: '#33cc00',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function (block) {
  const bl = JavaScript.valueToCode(block, 'ahq', JavaScript.ORDER_ATOMIC);
  const server = JavaScript.valueToCode(block, 'Server', JavaScript.ORDER_ATOMIC);
  const des = JavaScript.valueToCode(block, 'args', JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue('Label');
  const code = `{
        name: ${server},
        description: ${des},
        required: ${bl},
        type: ${type.replace('"', '').replace('"', '')}
    }`;
  return code;
};
