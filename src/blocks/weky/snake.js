import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const title = JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_ATOMIC);
  const footer = JavaScript.valueToCode(block, 'FOOTER', JavaScript.ORDER_ATOMIC);
  const timestamp = JavaScript.valueToCode(block, 'TIMESTAMP', JavaScript.ORDER_ATOMIC);
  const empty = JavaScript.valueToCode(block, 'EMPTY', JavaScript.ORDER_ATOMIC);
  const body = JavaScript.valueToCode(block, 'BODY', JavaScript.ORDER_ATOMIC);
  const food = JavaScript.valueToCode(block, 'FOOD', JavaScript.ORDER_ATOMIC);
  const cancel = JavaScript.valueToCode(block, 'CANCEL', JavaScript.ORDER_ATOMIC);
  const color = JavaScript.valueToCode(block, 'COLOR', JavaScript.ORDER_ATOMIC);
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
