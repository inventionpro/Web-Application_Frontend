import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
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
javascriptGenerator.forBlock[blockName] = (block) => {
  const name = javascriptGenerator.valueToCode(block, 'button name', javascriptGenerator.ORDER_NONE);
  const statementsThen = javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE);
  const code = `client.chat({message:${statementsThen}, name:${name}, owner:"scratch-for-discord-469-dev-ahqminessyt", user: 849690256945184828, language:"en"}).then(reply => {
        ${javascriptGenerator.valueToCode(block, 'channel', javascriptGenerator.ORDER_NONE)}.send(String(reply));
        });`;
  return code;
};
