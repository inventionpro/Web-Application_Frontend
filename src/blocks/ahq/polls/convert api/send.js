import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import BaseBlockly from 'blockly';
import { registerRestrictions } from '../../../../restrictions';
const blockName = 'send_ahq_converted';

const BORDER_FIELDS = ['AHQ_EE', 'AHQ_E', 'AHQ_B'];

const BORDER_TYPES = ['String', 'AHQEmbeds', 'AHQButton'];
const names = ['Text', 'Send ahq embed', 'Send ahq button (max 5)'];

const blockData = {
  message0: 'Send Attachment %1 File (filename) %2 Display Name %3 in channel %4',
  args0: [
    {
      type: 'input_dummy'
    },
    {
      type: 'input_value',
      name: 'Label',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'name',
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'ch',
      check: 'Channel'
    }
  ],
  colour: '#40BF4A',
  tooltip: 'Send the converted file to a channel.',
  helpUrl: '',
  inputsInline: false,
  mutator: 'ahq_send_mutator',
  previousStatement: null,
  nextStatement: null
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
Blockly.Blocks['ahq_send_mutator'] = {
  init: function () {
    this.setColour('#CECDCE');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
const BORDER_MUTATOR_MIXIN = {
  inputs_: [false, false, false],

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
    const containerBlock = workspace.newBlock('ahq_send_mutator');
    for (let i = 0; i < this.inputs_.length; i++) {
      BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
      containerBlock
        .appendDummyInput()
        .setAlign(Blockly.inputs.Align.RIGHT)
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
      if (this.getInput(BORDER_FIELDS[i].toUpperCase())) this.removeInput(BORDER_FIELDS[i].toUpperCase());
    }
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i]) {
        BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
        this.appendValueInput(BORDER_FIELDS[i].toUpperCase()).setCheck(BORDER_TYPES[i]).setAlign(Blockly.inputs.Align.LEFT).appendField(names[i]);
      }
    }
  }
};

Blockly.Extensions.registerMutator('ahq_send_mutator', BORDER_MUTATOR_MIXIN, null, ['']);
javascriptGenerator.forBlock[blockName] = (block) => {
  const a = javascriptGenerator.valueToCode(block, 'AHQ_E', javascriptGenerator.ORDER_NONE);
  const b = javascriptGenerator.valueToCode(block, 'AHQ_B', javascriptGenerator.ORDER_NONE);
  const code = [
    `${javascriptGenerator.valueToCode(block, 'ch', javascriptGenerator.ORDER_NONE)}.send({
        files: [{
            attachment: \`${javascriptGenerator.valueToCode(block, 'Label', javascriptGenerator.ORDER_NONE).replace("'", '').replace("'", '').replace('file.filename', '${file.filename}')}\`,
            name: \`${javascriptGenerator.valueToCode(block, 'name', javascriptGenerator.ORDER_NONE).replace("'", '').replace("'", '').replace('file.filename', '${file.filename}')}\`
        }]`
  ];
  if (a) {
    code.push(`,\nembeds: [${a.replace("'", '').replace("'", '')}]`);
  }
  if (b) {
    code.push(`,\ncomponents: [new Discord.ActionRowBuilder().addComponents(${b.replace("'", '').replace("'", '')})]`);
  }
  code.push(`});`);
  return code.join('\n');
};
registerRestrictions(blockName, [
  {
    message: 'RES_MISSING_AHQ_CONTENT',
    type: 'notempty',
    types: ['Label', 'name', 'ch']
  }
]);
