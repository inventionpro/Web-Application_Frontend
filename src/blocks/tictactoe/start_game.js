import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'tictactoe';

const blockData = {
  type: 'tictactoe',
  message0: 'Start a new tic tac toe game with %1 Opponent %2 Embed title %3 Game Over Title %4 Color %5 O Emoji %6 X Emoji %7 Blank Emoji %8 O Color %9 %10 X Color %11 %12 Wait Message %13 Turn Message %14 Ask Message %15 Cancel Message %16 Time end message %17 Draw Message %18 Win Message %19 Game End Message %20',
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

javascriptGenerator.forBlock['tictactoe'] = (block) => {
  var value_opponent = javascriptGenerator.valueToCode(block, 'Opponent', javascriptGenerator.ORDER_ATOMIC);
  var value_emb_title = javascriptGenerator.valueToCode(block, 'emb_title', javascriptGenerator.ORDER_ATOMIC);
  var value_gover_title = javascriptGenerator.valueToCode(block, 'gover_title', javascriptGenerator.ORDER_ATOMIC);
  var value_color = javascriptGenerator.valueToCode(block, 'color', javascriptGenerator.ORDER_ATOMIC);
  var value_oemoji = javascriptGenerator.valueToCode(block, 'oEmoji', javascriptGenerator.ORDER_ATOMIC);
  var value_xemoji = javascriptGenerator.valueToCode(block, 'xEmoji', javascriptGenerator.ORDER_ATOMIC);
  var value_blankemoji = javascriptGenerator.valueToCode(block, 'blankEmoji', javascriptGenerator.ORDER_ATOMIC);
  var dropdown_o_color_dropdown = block.getFieldValue('o_color_dropdown');
  var dropdown_x_color_dropdown = block.getFieldValue('x_color_dropdown');
  var value_waitmessage = javascriptGenerator.valueToCode(block, 'waitMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_turnmessage = javascriptGenerator.valueToCode(block, 'turnMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_askmessage = javascriptGenerator.valueToCode(block, 'askMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_cancelmessage = javascriptGenerator.valueToCode(block, 'cancelMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_timeendmessage = javascriptGenerator.valueToCode(block, 'timeEndMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_drawmessage = javascriptGenerator.valueToCode(block, 'drawMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_winmessage = javascriptGenerator.valueToCode(block, 'winMessage', javascriptGenerator.ORDER_ATOMIC);
  var value_gameendmessage = javascriptGenerator.valueToCode(block, 'gameEndMessage', javascriptGenerator.ORDER_ATOMIC);
  var code = `
    new TicTacToe({
        message: s4dmessage,
        slash_command: false,
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
