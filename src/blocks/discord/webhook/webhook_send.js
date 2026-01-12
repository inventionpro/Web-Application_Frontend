import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 's4d_send_webhook';

const blockData = {
  message0: 'as webhook send %1',
  args0: [
    {
      type: 'input_value',
      name: 'CONTENT',
      check: ['String', 'Number', 'MessageEmbed']
    }
  ],
  colour: '#135cc2',
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

javascriptGenerator.forBlock[blockName] = (block) => {
  const content = javascriptGenerator.valueToCode(block, 'CONTENT', javascriptGenerator.ORDER_ATOMIC);
  if (block.getInput('CONTENT').connection.targetConnection) {
    const contentType = block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_ ? block.getInput('CONTENT').connection.targetConnection.getSourceBlock().outputConnection.check_[0] : null;
    if (contentType === 'MessageEmbed' || (!contentType && typeof contentType === 'object')) {
      const code = `gwebhook.send({${content}});\n`;
      return code;
    } else {
      const code = `gwebhook.send(String(${content}));\n`;
      return code;
    }
  } else {
    const code = `gwebhook.send(String(${content}));\n`;
    return code;
  }
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: 'RES_GET_WEBHOOK_PARENT',
    types: ['s4d_get_webhook_then']
  }
]);
