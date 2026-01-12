import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_cal';

const name = 'Start a calculator with Embed title %1 Embed color %2 Embed footer %3 Timestamp %4 Calculator disabled message %5 Invalid equation message %6';

const blockData = {
  message0: `${name}`,
  args0: [
    {
      type: 'input_value',
      name: 'TITLE',
      Check: 'String'
    },
    {
      type: 'input_value',
      name: 'color',
      check: 'Colour'
    },
    {
      type: 'input_value',
      name: 'FOOTER',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'TIMESTAMP',
      check: 'Boolean'
    },
    {
      type: 'input_value',
      name: 'DISABLED',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'INVALID',
      check: 'String'
    }
  ],
  colour: '#48a4f0',
  tooltip: '',
  helpUrl: '',
  inputsInline: false,
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const title = javascriptGenerator.valueToCode(block, 'TITLE', javascriptGenerator.ORDER_ATOMIC);
  const color = javascriptGenerator.valueToCode(block, 'color', javascriptGenerator.ORDER_ATOMIC);
  const footer = javascriptGenerator.valueToCode(block, 'FOOTER', javascriptGenerator.ORDER_ATOMIC);
  const time = javascriptGenerator.valueToCode(block, 'TIMESTAMP', javascriptGenerator.ORDER_ATOMIC);
  const disabled = javascriptGenerator.valueToCode(block, 'DISABLED', javascriptGenerator.ORDER_ATOMIC);
  const invalid = javascriptGenerator.valueToCode(block, 'INVALID', javascriptGenerator.ORDER_ATOMIC);
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
