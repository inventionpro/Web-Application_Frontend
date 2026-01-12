import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'import_all';

const blockData = {
  type: 'block_type',
  message0: '%1 %2 = %3 %4',
  args0: [
    {
      type: 'field_dropdown',
      name: 'TYPE',
      options: [
        ['const', 'const'],
        ['var', 'var'],
        ['let', 'let'],
        ['set', 'set']
      ]
    },
    {
      type: 'input_value',
      name: 'VAR',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'CONTENT'
    },
    {
      type: 'field_dropdown',
      name: 'COLON',
      options: [
        [';', ';'],
        [' ', '']
      ]
    }
  ],
  colour: '#a55b80',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const type = block.getFieldValue('TYPE') == 'set' ? '' : block.getFieldValue('TYPE');
  const vab = javascriptGenerator.valueToCode(block, 'VAR', javascriptGenerator.ORDER_ATOMIC);
  const vab2 = vab.substring(1, vab.length - 1);
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  const colon = block.getFieldValue('COLON');
  const code = `${type} ${vab2} = ${content}${colon}
`;
  return code;
};
