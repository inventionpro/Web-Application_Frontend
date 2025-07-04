import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';

const blockName = 'explicit_content_filter';

const blockData = {
  type: 'explicit_content_filter',
  message0: '%1 content filter',
  args0: [
    {
      type: 'field_dropdown',
      name: 'NAME',
      options: [
        ['Disabled', 'DISABLED'],
        ['Members without roles', 'MEMBERS_WITHOUT_ROLES'],
        ['All members', 'ALL_MEMBERS']
      ]
    }
  ],
  inputsInline: true,
  output: null,
  colour: '#2AC395',
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

JavaScript['explicit_content_filter'] = function (block) {
  var dropdown = block.getFieldValue('NAME');
  var code = dropdown;
  return [code, JavaScript.ORDER_NONE];
};
