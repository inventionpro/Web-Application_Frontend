import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'snake_js';

const NAME = 'Start Snake game with embed title  %1 Embed footer %2 With timestamp %3 Empty space emoji %4 Snake body emoji %5 With food emoji %6 Cancel button text %7 Embed Color %8';

const blockData = {
  message0: `${NAME}`,
  args0: [
    {
      type: 'input_value',
      name: 'TITLE',
      Check: 'String'
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
      name: 'EMPTY',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'BODY',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'FOOD',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'CANCEL',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'COLOR',
      check: 'Colour'
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
  const footer = javascriptGenerator.valueToCode(block, 'FOOTER', javascriptGenerator.ORDER_ATOMIC);
  const timestamp = javascriptGenerator.valueToCode(block, 'TIMESTAMP', javascriptGenerator.ORDER_ATOMIC);
  const empty = javascriptGenerator.valueToCode(block, 'EMPTY', javascriptGenerator.ORDER_ATOMIC);
  const body = javascriptGenerator.valueToCode(block, 'BODY', javascriptGenerator.ORDER_ATOMIC);
  const food = javascriptGenerator.valueToCode(block, 'FOOD', javascriptGenerator.ORDER_ATOMIC);
  const cancel = javascriptGenerator.valueToCode(block, 'CANCEL', javascriptGenerator.ORDER_ATOMIC);
  const color = javascriptGenerator.valueToCode(block, 'COLOR', javascriptGenerator.ORDER_ATOMIC);
  const code = `
    await Snake({
        message: s4dmessage,
        embed: {
            title: ${title},
            description: 'GG, you scored **{{score}}** points!',
            color: ${color},
            footer: ${footer},
            timestamp: ${timestamp}
        },
        emojis: {
            empty: ${empty},
            snakeBody: ${body},
            food: ${food},
            up: '⬆️',
            right: '⬅️',
            down: '⬇️',
            left: '➡️',
        },
        othersMessage: 'Only <@{{author}}> can use the buttons!',
        buttonText: ${cancel}
    });`;
  return code;
};
