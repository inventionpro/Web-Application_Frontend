import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_history';

const blockData = {
  message0: 'History of s4d!',
  colour: '#40BF4A',
  output: 'String',
  tooltip: ':troll:',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
JavaScript[blockName] = function () {
  const code = [
    `\`s4d means scratch for discord
    s4d was created mainly by \\\`Androz\\\`
    The Devs of the current preview \\\`469\\\` are:-
    1. Androz (of course)
    2. Jose (454 coder)
    3. Redo (454 coder)
    4. Frostzzone (pull request 469 owner)
    5. Retro
    6. AHQSoftwares
    7. HenPokPok
    8. AlexCdDg
    
    Official s4d server:- https://discord.gg/cB2g5f4Ypq
    s4d 469 official server:- https://discord.gg/A7yttWszfD\``,
    JavaScript.ORDER_NONE
  ];
  return code;
};
