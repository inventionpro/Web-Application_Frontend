import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 's4d_on_menu_click';

const blockData = {
  message0: '%{BKY_ON_MENU_CLICK}',
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
    }
  ],
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const statements = JavaScript.statementToCode(block, 'STATEMENTS');
  const memberr = JavaScript.valueToCode(block, 'MEMBER', JavaScript.ORDER_ATOMIC);
  let member = memberr.replace('.user', '');
  const code = `let collector = m.createMessageComponentCollector({filter: i=>i.user.id === ${member}.id ,time:60000});
    collector.on('collect',async i=>{
        ${statements}
    })\n`;
  return code;
};
