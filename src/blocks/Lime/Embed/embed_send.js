import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'lime_s4d_embed_send';

const blockData = {
  type: blockName,
  message0: 'Call Embed With name %1 and text %2',
  args0: [
    {
      type: 'input_value',
      name: 'NAME'
    },
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#54CF83',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  let name = javascriptGenerator.valueToCode(block, 'NAME', javascriptGenerator.ORDER_ATOMIC);
  let text = javascriptGenerator.valueToCode(block, 'TEXT', javascriptGenerator.ORDER_ATOMIC);
  name = name.split(' ');
  name = name.join('_');
  name = name.toLowerCase();
  name = name.replace("'", '').replace("'", '');
  let code = `s4dmessage.channel.send({content:${text}, embeds : [${name}]})`;
  return code;
};
