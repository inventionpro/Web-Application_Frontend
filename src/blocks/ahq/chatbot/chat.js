import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
const blockName = 'chat_ahq';
const blockData = {
  message0: 'chat message %1 bot name %2 user ID %3 channel %4',
  args0: [
    {
      type: 'input_value',
      name: 'Label',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'button name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'user',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'channel',
      check: 'Channel'
    }
  ],
  colour: '#40BF4A',
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
  const name = JavaScript.valueToCode(block, 'button name', JavaScript.ORDER_NONE);
  const statementsThen = JavaScript.valueToCode(block, 'Label', JavaScript.ORDER_NONE);
  const code = `client.chat({message:${statementsThen}, name:${name}, owner:"scratch-for-discord-469-dev-ahqminessyt", user: 849690256945184828, language:"en"}).then(reply => {
        ${JavaScript.valueToCode(block, 'channel', JavaScript.ORDER_NONE)}.send(String(reply));
        });`;
  return code;
};
