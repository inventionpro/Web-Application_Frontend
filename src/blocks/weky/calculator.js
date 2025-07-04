import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_cal';

const name = 'Start a calculator with Embed title %1 %2 Embed color %3 %4 Embed footer %5 %6 Timestamp %7 %8 Calculator disabled message %9 %10 Invalid equation message %11';

const blockData = {
  message0: `${name}`,
  args0: [
    {
      type: 'input_value',
      name: 'TITLE',
      Check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'color',
      check: 'Colour'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'FOOTER',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'TIMESTAMP',
      check: 'Boolean'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'DISABLED',
      check: 'String'
    },
    {
      type: 'input_space'
    },
    {
      type: 'input_value',
      name: 'INVALID',
      check: 'String'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#48a4f0',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const title = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_ATOMIC);
  const color = JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC);
  const footer = JavaScript.valueToCode(block, 'FOOTER', JavaScript.ORDER_ATOMIC);
  const time = JavaScript.valueToCode(block, 'TIMESTAMP', JavaScript.ORDER_ATOMIC);
  const disabled = JavaScript.valueToCode(block, 'DISABLED', JavaScript.ORDER_ATOMIC);
  const invalid = JavaScript.valueToCode(block, 'INVALID', JavaScript.ORDER_ATOMIC);
  const code = `
    await Calculator({
        message: s4dmessage,
        embed: {
            title: ${title},
            color: ${color},
            footer: ${footer},
            timestamp: ${time}
        },
        disabledQuery: ${disabled},
        invalidQuery: ${invalid},
        othersMessage: 'Only <@{{author}}> can use the buttons!'
    });`;
  return code;
};
