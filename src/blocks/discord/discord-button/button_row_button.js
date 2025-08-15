import BaseBlockly from 'blockly';
import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import { registerRestrictions } from '../../../restrictions';

const BORDER_FIELDS = ['STYLE', 'LABEL', 'EMOJI', 'URL', 'CUSTOM_ID', 'DISABLED'];

const BORDER_TYPES = ['ButtonStyle', 'String', 'String', 'String', 'String', 'Boolean'];

const s4d_message_row_block = {
  message0: '%{BKY_MESSAGE_ROW_BLOCK}',
  mutator: 's4d_message_row_block_mutator',
  tooltip: '',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null,
  colour: '#40BF4A'
};

Blockly.Blocks['s4d_message_row_block'] = {
  init: function () {
    this.jsonInit(s4d_message_row_block);
  }
};

Blockly.Blocks['s4d_message_row_block_mutator'] = {
  init: function () {
    this.setColour('#CECDCE');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

const BORDER_MUTATOR_MIXIN = {
  inputs_: [true, true, false, false, false, false],

  mutationToDom: function () {
    if (!this.inputs_) {
      return null;
    }
    const container = document.createElement('mutation');
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i]);
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == 'true';
    }
    this.updateShape_();
  },

  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('s4d_message_row_block_mutator');
    for (let i = 0; i < this.inputs_.length; i++) {
      containerBlock
        .appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(BaseBlockly.Msg[BORDER_FIELDS[i]])
        .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? 'TRUE' : 'FALSE'), BORDER_FIELDS[i].toUpperCase());
    }
    containerBlock.initSvg();
    return containerBlock;
  },

  compose: function (containerBlock) {
    // Set states
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == 'TRUE';
    }
    this.updateShape_();
  },

  updateShape_: function () {
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
    }
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i]) {
        this.appendValueInput(BORDER_FIELDS[i].toUpperCase()).setCheck(BORDER_TYPES[i]).setAlign(Blockly.ALIGN_RIGHT).appendField(BaseBlockly.Msg[BORDER_FIELDS[i]]);
      }
    }
  }
};

Blockly.Extensions.registerMutator('s4d_message_row_block_mutator', BORDER_MUTATOR_MIXIN, null, ['']);

JavaScript['s4d_message_row_block'] = function (block) {
  let id = JavaScript.valueToCode(block, 'CUSTOM_ID', JavaScript.ORDER_ATOMIC) || null;
  let url = JavaScript.valueToCode(block, 'URL', JavaScript.ORDER_ATOMIC) || null;
  let emoji = JavaScript.valueToCode(block, 'EMOJI', JavaScript.ORDER_ATOMIC) || null;
  let label = JavaScript.valueToCode(block, 'LABEL', JavaScript.ORDER_ATOMIC) || null;
  let style = JavaScript.valueToCode(block, 'STYLE', JavaScript.ORDER_ATOMIC) || null;
  let disabled = JavaScript.valueToCode(block, 'DISABLED', JavaScript.ORDER_ATOMIC) || null;
  let code = `new Discord.ButtonBuilder()\n`;
  if (id !== null) code += `.setCustomId(${id})\n`;
  if (url !== null) code += `.setURL(${url})\n`;
  if (label !== null) code += `.setLabel(${label})\n`;
  if (emoji !== null) code += `.setEmoji(${emoji})\n`;
  if (disabled !== null) code += `.setDisabled(${disabled})\n`;
  if (style === null) code += ".setStyle('SECONDARY')";
  if (style !== null) code += `.setStyle(${style})`;
  code += ',\n';
  return code;
};

registerRestrictions('s4d_message_row_block', [
  {
    type: 'hasparent',
    message: 'RES_MUST_BE_IN_BUTTON_ROW',
    types: ['s4d_button_row']
  }
]);
