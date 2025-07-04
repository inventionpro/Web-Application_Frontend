import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';

const blockName = 'jg_beginJimp';

const blockData = {
  message0: 'Begin image edits on URL, buffer or File %2 using effects %3 %1',
  args0: [
    {
      type: 'input_statement',
      name: 'beginJimp'
    },
    {
      type: 'input_value',
      name: 'JimpURL',
      check: ['String', 'var', 'buffer']
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: 260,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Place this before placing any other Jimp editing block.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript[blockName] = function (block) {
  const JimpURL = JavaScript.valueToCode(block, 'JimpURL', JavaScript.ORDER_ATOMIC);
  const JimpCode = JavaScript.statementToCode(block, 'beginJimp');
  const code =
    `var JimpImageBlock = ` +
    JimpURL +
    `;
await jimp.read(${JimpURL}, async (err, image) => {
    if (err) throw err;
    ${JimpCode}
});
`;
  return code;
};
