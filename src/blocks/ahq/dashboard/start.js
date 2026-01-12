import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import BaseBlockly from 'blockly';
import { registerRestrictions } from '../../../restrictions';

const BORDER_FIELDS = ['ahq_a_d', 'ahq_b_d', 'd_server', 'invite_d', 'base_d', 'secret_d', 'p_D_perms', 'cookie_d'];

const BORDER_TYPES = ['String', 'String', 'String', 'String', 'String', 'String', 'ahq_permisisons', 'ahq_cookie'];
const names = ['Bot Name', 'Bot Description', 'Support Server URL', 'Bot Invite URL', 'Replit Base URL', 'Client Secret', 'Access Permissions', 'Mongo DB URL (cookies)'];

const blockName = 'start_ahq_dash';

const blockData = {
  type: 'block_type',
  message0: 'start dashboard',
  colour: '#0EB22B',
  tooltip: 'Setup your dashboard',
  helpUrl: '',
  mutator: 'dash_setup'
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};
Blockly.Blocks['dash_setup'] = {
  init: function () {
    this.setColour('#CECDCE');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
const BORDER_MUTATOR_MIXIN = {
  inputs_: [true, true, true, true, true, true, false, false],

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
    const containerBlock = workspace.newBlock('dash_setup');
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

// const BORDER_FIELDS = ["ahq_a_d", "ahq_b_d", "d_server", "invite_d", "base_d", "secret_d", "p_D_perms", "cookie_d"];

// const BORDER_TYPES = ["String", "String", "String", "String", "String", "String", "ahq_permisisons", "String"];
// const names = ["Bot Name", "Bot Description", "Support Server URL", "Bot Invite URL", "Replit Base URL", "Client Secret", "Access Permissions", "Mongo DB URL (cookies)"];
//const types = [true, true, true, true, true, true, false, false]
Blockly.Extensions.registerMutator('dash_setup', BORDER_MUTATOR_MIXIN, null, ['']);
javascriptGenerator.forBlock[blockName] = (block) => {
  let extra = [];
  if (javascriptGenerator.valueToCode(block, 'P_D_PERMS', javascriptGenerator.ORDER_NONE)) {
    extra.push(`,\npermissions: ${javascriptGenerator.valueToCode(block, 'P_D_PERMS', javascriptGenerator.ORDER_NONE)}`);
  }
  if (javascriptGenerator.valueToCode(block, 'COOKIE_D', javascriptGenerator.ORDER_NONE)) {
    extra.push(`,\nsession: ${javascriptGenerator.valueToCode(block, 'COOKIE_D', javascriptGenerator.ORDER_NONE)}`);
  }
  const code = `const Dashboard = require("discord-easy-dashboard");
    const dashboard = new Dashboard(s4d.client, {
        name: ${javascriptGenerator.valueToCode(block, 'AHQ_A_B', javascriptGenerator.ORDER_NONE)},
        description: ${javascriptGenerator.valueToCode(block, 'AHQ_B_D', javascriptGenerator.ORDER_NONE)},
        baseUrl: ${javascriptGenerator.valueToCode(block, 'BASE_D', javascriptGenerator.ORDER_NONE)},
        noPortIncallbackUrl: true,
        secret: ${javascriptGenerator.valueToCode(block, 'SECRET_D', javascriptGenerator.ORDER_NONE)},
        serverUrl: ${javascriptGenerator.valueToCode(block, 'D_SERVER', javascriptGenerator.ORDER_NONE)},
        inviteUrl: ${javascriptGenerator.valueToCode(block, 'INVITE_D', javascriptGenerator.ORDER_NONE)}${extra.join('')}
    });
    s4d.client.dashboard = dashboard;`;
  return code;
};

registerRestrictions(blockName, [
  {
    type: 'notempty',
    message: 'RES_MISSING_AHQ_CONTENT',
    types: ['AHQ_A_D', 'AHQ_B_D', 'D_SERVER', 'INVITE_D', 'BASE_D', 'SECRET_D']
  }
]);
