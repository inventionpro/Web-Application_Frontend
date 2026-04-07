import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import { Types } from '../../types.js';

const blockName = 'options';
Blockly.Blocks[blockName] = {
  init: function () {
    var thisBlock = this;
    var dropdown = new Blockly.FieldDropdown(
      [
        ['string', 'String'],
        ['integer', 'Integer'],
        ['boolean', 'Boolean'],
        ['user', 'User'],
        ['member', 'Member'],
        ['channel', 'Channel'],
        ['role', 'Role'],
        ['subcommand', 'Subcommand'],
        ['subcommand group', 'SubcommandGroup'],
        ['Attachment', 'Attachment']
      ],
      function (newMode) {
        thisBlock.updateType_(newMode);
        return newMode;
      }
    );
    this.appendDummyInput('SEARCH').appendField('Get').appendField(dropdown, 'SEARCH');
    this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
    this.setInputsInline(true);
    this.setOutput(true, Types.String);
    this.setColour('#4C97FF');
  },
  updateType_: function (newMode) {
    if (newMode === null) return;
    if (newMode === undefined) return;
    if (newMode === 'null') return;
    let a = newMode.toLowerCase();
    newMode = a;
    if (this.getInput('BOOLEAN') != null) {
      this.removeInput('BOOLEAN');
    }
    if (newMode == 'string') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.String);
    } else if (newMode == 'integer') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.Number);
    } else if (newMode == 'boolean') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.Boolean);
    } else if (newMode == 'user') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.User);
    } else if (newMode == 'member') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.Member);
    } else if (newMode == 'channel') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.Channel);
    } else if (newMode == 'role') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, Types.Role);
    } else if (newMode == 'subcommand') {
      this.setOutput(true, Types.String);
    } else if (newMode == 'subcommand group') {
      this.setOutput(true, Types.String);
    } else if (newMode == 'attachment') {
      this.appendValueInput('BOOLEAN').setCheck(Types.String).appendField('option name');
      this.setOutput(true, 'Attachment');
    }
  },
  mutationToDom: function () {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('mode', this.getFieldValue('SEARCH'));
    container.setAttribute('type', this.getFieldValue('TYPE'));
    return container;
  },
  domToMutation: function (xmlElement) {
    this.updateType_(xmlElement.getAttribute('mode'));
  }
};

javascriptGenerator.forBlock[blockName] = (block) => {
  const searchType = block.getFieldValue('SEARCH');
  const string = javascriptGenerator.valueToCode(block, 'BOOLEAN', javascriptGenerator.ORDER_ATOMIC).toLowerCase();
  return [`interaction.options.get${searchType}(${string})`, javascriptGenerator.ORDER_NONE];
};
