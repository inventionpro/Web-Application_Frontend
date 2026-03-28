import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 's4d_get_user_banner';
const blockData = {
  message0: 'get banner of user with the id equal to %1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'ID',
      check: Types.String
    },
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'THEN'
    }
  ],
  colour: '#187795',
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  isHiden: true
};

// patched by gsa bc though it is dumb it is used kinda
// TODO: change to use bannerURL() when it decides to work
javascriptGenerator.forBlock[blockName] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  return `fetch('https://discord.com/api/users/'+${id}, {
  headers: {
    Authorization: "Bot " + s4d.client.token,
  },
}).then(res=>res.json).then(res => {
  if (res.data.banner === null) return;
  let format = 'png';
  if (res.data.banner.substring(0,2) === 'a_') format = 'gif';
  banner = 'https://cdn.discordapp.com/banners/' + ${id} + '/' + res.data.banner + '.' + format + '?size=512';
${statementThen}
});`;
};
