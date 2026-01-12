import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_embed_add_field';

const blockData = {
  message0: 'add embed field %1 with title %2 with description %3 field inline?  %4',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'TITLE'
    },
    {
      type: 'input_value',
      name: 'DESCRIPTION'
    },
    {
      type: 'input_value',
      name: 'INLINE',
      check: 'Boolean'
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#40BF4A',
  tooltip: 'Add a field to an embed.',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const title = javascriptGenerator.valueToCode(block, 'TITLE', javascriptGenerator.ORDER_ATOMIC);
  const description = javascriptGenerator.valueToCode(block, 'DESCRIPTION', javascriptGenerator.ORDER_ATOMIC);
  const inline = javascriptGenerator.valueToCode(block, 'INLINE', javascriptGenerator.ORDER_ATOMIC);
  if (inline.length == 0) {
    const code = `hnxgcjtirh.addField(String(${title}), String(${description}), false); \n`;
    return code;
  }
  const code = `hnxgcjtirh.addField(String(${title}), String(${description}), ${inline}); \n`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_CREATE_EMBED_THEN',
    types: ['s4d_embed_create']
  }
]);
