import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 's4d_on_click';

const blockData = {
  message0: 'when a button is clicked by member %3 before %4 (in seconds, leave blank for default) %1 %2',
  colour: '#F5AB1A',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_statement',
      name: 'STATEMENTS'
    },
    {
      type: 'input_value',
      name: 'MEMBER',
      check: 'Member'
    },
    {
      type: 'input_value',
      name: 'time',
      check: 'Number'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Run the blocks inside when a button is clicked by a member. Leave the member input empty if any member is allowed to press the button.'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  const memberr = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  const time = JavaScript.valueToCode(block, 'time', JavaScript.ORDER_ATOMIC);
  let member = memberr.replace('.user', '');
  if (String(member) == null || String(member) == '') member = 'i.user';
  const code = `
let collector = m.createMessageComponentCollector({
    filter: i => i.user.id === ${member}.id,
    time: Number(${time < 1 ? '60000' : time}) * 1000
});
collector.on('collect', async i => {
    ${statements}
})
`;
  return code;
};
