import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_beginJimpIMG';

const blockData = {
  message0: 'Begin image edits on File %2 using effects %3 %1',
  args0: [
    {
      type: 'input_statement',
      name: 'beginJimp'
    },
    {
      type: 'input_value',
      name: 'JimpURL',
      check: ['String', 'var']
    },
    {
      type: 'input_dummy'
    }
  ],
  colour: '#DB0000',
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Place this before placing any other Jimp editing block. This block only grabs files.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const JimpIMG = javascriptGenerator.valueToCode(block, 'JimpURL', javascriptGenerator.ORDER_ATOMIC);
  const JimpCode = javascriptGenerator.statementToCode(block, 'beginJimp');
  const code =
    `jimp.read(` +
    JimpIMG +
    `, (err, image) => {
      if (err) throw err;
      ${JimpCode}
      });`;
  return code;
};
