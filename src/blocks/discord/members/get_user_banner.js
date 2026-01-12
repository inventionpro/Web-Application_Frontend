import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 's4d_get_user_banner';

const blockData = {
  message0: 'get banner of member with the id equal to %1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'ID'
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
javascriptGenerator.forBlock[blockName] = (block) => {
  const id = javascriptGenerator.valueToCode(block, 'ID', javascriptGenerator.ORDER_ATOMIC);
  const statementThen = javascriptGenerator.statementToCode(block, 'THEN');
  let code = `
await S4D_APP_PKG_axios('https://discord.com/api/users/' + ${id}, {
    headers: {
        Authorization: "Bot " + s4d.client.token,
    },
}).then(async (res) => {
    if (res.data.banner != null) {
        let format = 'png'
        if (res.data.banner.substring(0,2) === 'a_') {
            format = 'gif'
        }
        banner = 'https://cdn.discordapp.com/banners/' + ${id} + '/' + res.data.banner + '.' +format + '?size=512'
        ${statementThen}
    }
})\n`;
  return code;
};
