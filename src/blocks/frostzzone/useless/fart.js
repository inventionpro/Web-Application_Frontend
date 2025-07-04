import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_fart';

const blockData = {
  message0: 'Send Fart',
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
            let embed = new Discord.MessageEmbed()
        embed.setImage('https://c.tenor.com/UVAk99QaOTsAAAAC/fart-experiment.gif');
        (s4dmessage.channel).send({
            embeds: [embed]
        });`;
  return code;
};
