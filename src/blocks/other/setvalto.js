import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'jg_other_setvalue';

const blockData = {
  message0: 'set %1 to %2',
  inputsInline: true,
  colour: '#D14081',
  args0: [
    {
      type: 'input_value',
      name: 'input',
      check: null
    },
    {
      type: 'input_value',
      name: 'replace',
      check: null
    }
  ],
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Set something to another thing.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const input = javascriptGenerator.valueToCode(block, 'input', javascriptGenerator.ORDER_ATOMIC);
  const replace = javascriptGenerator.valueToCode(block, 'replace', javascriptGenerator.ORDER_ATOMIC);
  const code = `${input} = ${replace}
    `;
  return code;
};
