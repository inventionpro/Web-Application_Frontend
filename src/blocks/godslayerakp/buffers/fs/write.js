import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'gsa_fs_write_buffer';

const blockData = {
  message0: 'write buffer %2 to file %1',
  args0: [
    {
      type: 'input_value',
      name: 'FILE',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'CONTENT',
      check: 'buffer'
    }
  ],
  colour: '#4C97FF',
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

JavaScript[blockName] = function (block) {
  const file = JavaScript.valueToCode(block, 'FILE', JavaScript.ORDER_ATOMIC);
  const content = JavaScript.valueToCode(block, 'CONTENT', JavaScript.ORDER_ATOMIC);

  const code = `fs.writeFileSync(${file}, ${content}, async function (err) {
    console.log(err) 
});
`;
  return code;
};
