import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

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

JavaScript[blockName] = function (block) {
  const user = JavaScript.valueToCode(block, 'user', JavaScript.ORDER_ATOMIC);
  return [
    `
${user}.bannerUrl({
  format: "png"
})\n`,
    JavaScript.ORDER_ATOMIC
  ];
};
