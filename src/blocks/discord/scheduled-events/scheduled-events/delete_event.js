import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../../types.js';

const blockName = 'delete_sch_event';
const blockData = {
  type: 'delete_sch_event',
  message0: 'Delete event with ID %1',
  args0: [
    {
      type: 'input_value',
      name: 'amongus',
      check: Types.String
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

javascriptGenerator.forBlock['delete_sch_event'] = (block) => {
  var amongus = javascriptGenerator.valueToCode(block, 'amongus', javascriptGenerator.ORDER_ATOMIC);

  amongus = amongus.split(' '); // Splits Embed name by space so "Lime Nade" = ["Lime","Nade"]
  amongus = amongus.join('_'); // Puts back together the separated parts but puts an underscore between them. ["Lime","Nade"] = Lime_Nade
  amongus = amongus.toLowerCase(); // Puts to lower case Lime_Nade = lime_nade
  amongus = amongus.replace("'", '').replace("'", ''); // Deletes the quotes so it's no longer a string but a varable!

  return `${amongus}.delete();`;
};
