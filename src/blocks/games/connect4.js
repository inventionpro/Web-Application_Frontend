import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_connect4';

const blockData = {
  message0: 'Play Connect four',
  args0: [],
  colour: '#D14081',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function () {
  const code = `
const { ConnectFour } = require(djs-games)

const game = new ConnectFour({
  message: message,
  player1: '🔴',
  player2: '🟡',
})
game.start()
`;
  return code;
};
