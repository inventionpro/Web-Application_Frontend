import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'frost_floppa';

const blockData = {
  message0: 'Send Floppa',
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
        embed.setImage('https://c.tenor.com/VcR3cl_TNQsAAAAM/big-floppa-mad-floppa.gif');
        (s4dmessage.channel).send({
            embeds: [embed]
        });`;
  return code;
};
