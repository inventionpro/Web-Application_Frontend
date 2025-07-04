import * as Blockly from 'blockly/core';
import * as JavaScript from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const blockName = 'jg_tests_customRestrictionName';

const blockData = {
  message0: 'Custom Restriction Name',
  args0: [],
  colour: 0,
  previousStatement: null,
  nextStatement: null,
  tooltip: '',
  helpUrl: ''
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  },
  isHiden: true
};

JavaScript[blockName] = function () {
  const code = ``;
  return code;
};
registerRestrictions(blockName, [
  {
    type: 'hasparent',
    message: '$here is the custom restriction!',
    types: [`asfdsedgasfdsedgrwgoierhyfoiewasfdsedgrwgoierhyfoiewasfdsedgrwgoierhyfoiewasfdsedgrwgoierhyfoiewrwgoierhyfoiew${Math.random() * 10000}`]
  }
]);
