import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'gsa_get_user_banner_but_member_is_user_rn';
const blockData = {
  message0: 'get banner on member %1',
  args0: [
    {
      type: 'input_value',
      name: 'user',
      check: 'Member'
    }
  ],
  output: 'String',
  inputsInline: true,
  colour: '#50A6C9',
  tooltip: 'returns the url of any users banner image',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const user = javascriptGenerator.valueToCode(block, 'user', javascriptGenerator.ORDER_ATOMIC);
  return [
    `
${user}.bannerUrl({
  format: "png"
})\n`,
    javascriptGenerator.ORDER_ATOMIC
  ];
};
