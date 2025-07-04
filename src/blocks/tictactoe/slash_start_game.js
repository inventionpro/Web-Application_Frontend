import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'slash_tictactoe';

const blockData = {
  type: 'slash_tictactoe',
  message0: '[SLASH COMMANDS] Start a new tic tac toe game with %1 Opponent %2 Embed title %3 Game Over Title %4 Color %5 O Emoji %6 X Emoji %7 Blank Emoji %8 O Color %9 %10 X Color %11 %12 Wait Message %13 Turn Message %14 Ask Message %15 Cancel Message %16 Time end message %17 Draw Message %18 Win Message %19 Game End Message %20',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'Opponent'
    },
    {
      type: 'input_value',
      name: 'emb_title',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'gover_title',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'color'
    },
    {
      type: 'input_value',
      name: 'oEmoji',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'xEmoji',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'blankEmoji',
      check: 'String'
    },
    {
      type: 'field_dropdown',
      name: 'o_color_dropdown',
      options: [
        ['Blurple', 'PRIMARY'],
        ['Grey', 'SECONDARY'],
        ['Red', 'DANGER'],
        ['Green', 'SUCCESS']
      ]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'field_dropdown',
      name: 'x_color_dropdown',
      options: [
        ['Red', 'DANGER'],
        ['Green', 'SUCCESS'],
        ['Blurple', 'PRIMARY'],
        ['Grey', 'SECONDARY']
      ]
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'waitMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'turnMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'askMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'cancelMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'timeEndMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'drawMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'winMessage',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'gameEndMessage',
      check: 'String'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: 240,
  tooltip: 'Play a Tic Tac Toe Game',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['slash_tictactoe'] = function (block) {
  var value_opponent = JavaScript.valueToCode(block, 'Opponent', JavaScript.ORDER_ATOMIC);
  var value_emb_title = JavaScript.valueToCode(block, 'emb_title', JavaScript.ORDER_ATOMIC);
  var value_gover_title = JavaScript.valueToCode(block, 'gover_title', JavaScript.ORDER_ATOMIC);
  var value_color = JavaScript.valueToCode(block, 'color', JavaScript.ORDER_ATOMIC);
  var value_oemoji = JavaScript.valueToCode(block, 'oEmoji', JavaScript.ORDER_ATOMIC);
  var value_xemoji = JavaScript.valueToCode(block, 'xEmoji', JavaScript.ORDER_ATOMIC);
  var value_blankemoji = JavaScript.valueToCode(block, 'blankEmoji', JavaScript.ORDER_ATOMIC);
  var dropdown_o_color_dropdown = block.getFieldValue('o_color_dropdown');
  var dropdown_x_color_dropdown = block.getFieldValue('x_color_dropdown');
  var value_waitmessage = JavaScript.valueToCode(block, 'waitMessage', JavaScript.ORDER_ATOMIC);
  var value_turnmessage = JavaScript.valueToCode(block, 'turnMessage', JavaScript.ORDER_ATOMIC);
  var value_askmessage = JavaScript.valueToCode(block, 'askMessage', JavaScript.ORDER_ATOMIC);
  var value_cancelmessage = JavaScript.valueToCode(block, 'cancelMessage', JavaScript.ORDER_ATOMIC);
  var value_timeendmessage = JavaScript.valueToCode(block, 'timeEndMessage', JavaScript.ORDER_ATOMIC);
  var value_drawmessage = JavaScript.valueToCode(block, 'drawMessage', JavaScript.ORDER_ATOMIC);
  var value_winmessage = JavaScript.valueToCode(block, 'winMessage', JavaScript.ORDER_ATOMIC);
  var value_gameendmessage = JavaScript.valueToCode(block, 'gameEndMessage', JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `
    new TicTacToe({
        message: interaction,
        slash_command: true,
        opponent: ${value_opponent},
        embed: {
            title: ${value_emb_title},
            overTitle: ${value_gover_title},
            color: ${value_color},
        },
        oEmoji: ${value_oemoji},
        xEmoji: ${value_xemoji},
        blankEmoji: ${value_blankemoji},
        oColor: '${dropdown_o_color_dropdown}',
        xColor: '${dropdown_x_color_dropdown}',
        waitMessage: ${value_waitmessage},
        turnMessage: ${value_turnmessage},
        askMessage: ${value_askmessage},
        cancelMessage: ${value_cancelmessage},
        timeEndMessage: ${value_timeendmessage},
        drawMessage: ${value_drawmessage},
        winMessage: ${value_winmessage},
        gameEndMessage: ${value_gameendmessage},
    }).startGame();
    `;
  return code;
};
