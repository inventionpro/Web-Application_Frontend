import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

const blockName = 'create_new_event';

const blockData = {
  type: 'create_new_event',
  message0: 'Create new event in server %1 with ID %2 and %3',
  args0: [
    {
      type: 'input_value',
      name: 'event_server',
      check: 'Server'
    },
    {
      type: 'input_value',
      name: 'event_id',
      check: 'String'
    },
    {
      type: 'input_statement',
      name: 'options'
    }
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: '#ae81f7',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

javascriptGenerator.forBlock['create_new_event'] = (block) => {
  var new_event_server = javascriptGenerator.valueToCode(block, 'event_server', javascriptGenerator.ORDER_ATOMIC);
  var statements = javascriptGenerator.statementToCode(block, 'options');
  var event_id = javascriptGenerator.valueToCode(block, 'event_id', javascriptGenerator.ORDER_ATOMIC);

  event_id = event_id.split(' '); // Splits Embed name by space so "Lime Nade" = ["Lime","Nade"]
  event_id = event_id.join('_'); // Puts back together the separated parts but puts an underscore between them. ["Lime","Nade"] = Lime_Nade
  event_id = event_id.toLowerCase(); // Puts to lower case Lime_Nade = lime_nade
  event_id = event_id.replace("'", ''); // Deletes the quotes so it's no longer a string but a varable!
  event_id = event_id.replace("'", ''); // Same here

  var code = `let ${event_id} = await ${new_event_server}.scheduledEvents.create({${statements}})\n`;
  return code;
};
