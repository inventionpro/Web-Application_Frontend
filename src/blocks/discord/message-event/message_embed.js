import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import BaseBlockly from 'blockly';
const blockName = 's4d_message_embed';
const menuName = 's4d_message_embed_mutator';

const BlockColor = '#40BF4A';
// menu customization
const menuUsesBlockColor = false;
const menuTooltip = `Click the checkboxes to change the embed's contents.`;

// border fields is the name of the input when getting it for the exported code.
// they HAVE to be uppercase currently or it won't work since im too lazy to change the uppercase function uses
const BORDER_FIELDS = ['MESSAGE', 'COLOR', 'TITLE', 'IMAGE', 'FOOTER', 'THUMBNAIL', 'FIELD'];
// border types is the input type of every input in the block
const BORDER_TYPES = ['String', 'Colour', 'String', 'String', 'String', 'String', 'Field'];
// names is the name of that input in the menu and in the final block
const names = ['message', 'color', 'title', 'image', 'footer', 'thumbnail', 'field'];
const amountOfInputs = names.length;

const blockData = {
  message0: 'Message Embed',
  output: ['MessageEmbed', 'AndrozS4DEmbed'],
  helpUrl: '',
  tooltip: '',
  colour: BlockColor
};
Blockly.Blocks[menuName] = {
  init: function () {
    this.setColour(menuUsesBlockColor ? BlockColor : '#CECDCE');
    this.setTooltip(menuTooltip);
    this.setHelpUrl('');
  }
};
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    this.setMutator(new Blockly.Mutator([], this));
    this.inputs_ = [];
    for (let i = 0; i < amountOfInputs; i++) {
      this.inputs_.push(i == 0);
    }
  },

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
    const containerBlock = workspace.newBlock(menuName);
    for (let i = 0; i < this.inputs_.length; i++) {
      BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
      containerBlock
        .appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(names[i])
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
      if (!this.inputs_[i] && this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
    }
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i] && !this.getInput(BORDER_FIELDS[i].toUpperCase())) {
        BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
        this.appendValueInput(BORDER_FIELDS[i].toUpperCase()).setCheck(BORDER_TYPES[i]).setAlign(Blockly.ALIGN_RIGHT).appendField(names[i]);
      }
    }
  }
};

JavaScript['s4d_message_embed'] = function (block) {
  let title = '';
  let color = '';
  let image = '';
  let description = '';
  let footer = '';
  let thumbnail = '';
  let field = '';
  if ((JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_ATOMIC) || null) !== null) {
    title = `\n.setTitle(String(${JavaScript.valueToCode(block, 'TITLE', JavaScript.ORDER_ATOMIC)}))`;
  }
  if ((JavaScript.valueToCode(block, 'COLOR', JavaScript.ORDER_ATOMIC) || null) !== null) {
    color = `\n.setColor(String(${JavaScript.valueToCode(block, 'COLOR', JavaScript.ORDER_ATOMIC)}))`;
  }
  if ((JavaScript.valueToCode(block, 'IMAGE', JavaScript.ORDER_ATOMIC) || null) !== null) {
    image = `\n.setImage(String(${JavaScript.valueToCode(block, 'IMAGE', JavaScript.ORDER_ATOMIC)}))`;
  }
  if ((JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC) || null) !== null) {
    description = `\n.setDescription(String(${JavaScript.valueToCode(block, 'MESSAGE', JavaScript.ORDER_ATOMIC)}))`;
  }
  if ((JavaScript.valueToCode(block, 'FOOTER', JavaScript.ORDER_ATOMIC) || null) !== null) {
    footer = `\n.setFooter(String(${JavaScript.valueToCode(block, 'FOOTER', JavaScript.ORDER_ATOMIC)}))`;
  }
  if ((JavaScript.valueToCode(block, 'THUMBNAIL', JavaScript.ORDER_ATOMIC) || null) !== null) {
    thumbnail = `\n.setThumbnail(String(${JavaScript.valueToCode(block, 'THUMBNAIL', JavaScript.ORDER_ATOMIC)}))`;
  }
  if ((JavaScript.statementToCode(block, 'FIELD', JavaScript.ORDER_ATOMIC) || null) !== null) {
    field = `\n.addFields(${JavaScript.statementToCode(block, 'FIELD')})`;
  }
  return [
    `
            embeds: [new Discord.EmbedBuilder()${title}${color}${image}${description}${footer}${thumbnail}${field}
            ]
    `,
    JavaScript.ORDER_ATOMIC
  ];
};
