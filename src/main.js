import { createApp } from 'vue';
import { bootstrapPlugin, modalManagerPlugin } from 'bootstrap-vue-next';
import App from './App.vue';
import store from './store';
import { createI18n } from 'vue-i18n';
import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import VueToast from 'vue-toast-notification';
import VueTour from 'vue3-tour';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import savenload from './save-load';

const app = createApp(App);

import { BModal, BNavItem, BNavItemDropdown, BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle, BButton, BDropdownItem, BDropdownDivider, BCollapse } from 'bootstrap-vue-next';
app.component('b-modal', BModal);
app.component('b-nav-item', BNavItem);
app.component('b-nav-item-dropdown', BNavItemDropdown);
app.component('b-navbar', BNavbar);
app.component('b-navbar-nav', BNavbarNav);
app.component('b-navbar-brand', BNavbarBrand);
app.component('b-navbar-toggle', BNavbarToggle);
app.component('BButton', BButton);
app.component('b-dropdown-item', BDropdownItem);
app.component('b-dropdown-divider', BDropdownDivider);
app.component('b-collapse', BCollapse);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(VueTour);
app.use(VueToast);
app.use(bootstrapPlugin);
app.use(modalManagerPlugin);

import req from './require';

import blocklyLocaleEN from 'blockly/msg/en';
import blocklyLocaleFR from 'blockly/msg/fr';
import blocklyLocalePT from 'blockly/msg/pt';

import customLocaleEN from './locales/en';
import customLocaleFR from './locales/fr';
import customLocalePT from './locales/pt';
import localforage from 'localforage';
const messages = {
  en: customLocaleEN.websiteMessages,
  fr: customLocaleFR.websiteMessages,
  pt: customLocalePT.websiteMessages
};
const i18n = createI18n({
  legacy: true,
  globalInjection: true,
  locale: messages[navigator.language.split('-')[0]] ? navigator.language.split('-')[0] : 'en',
  fallbackLocale: 'en',
  messages
});

import toolbox from './toolbox';

//import {Backpack} from '@blockly/workspace-backpack';
import Theme from '@blockly/theme-dark';
app.mixin({
  methods: {
    async reloadWorkspace() {
      let val = (await localforage.getItem('fav')) === null ? null : await localforage.getItem('fav');
      // Get current workspace
      let workspace = this.$store.state.workspace;
      // Convert it to a dom string
      const dom = Blockly.Xml.workspaceToDom(workspace);
      // Delete the current workspace
      workspace.dispose();
      // Create a new workspace (with the good language)
      const newWorkspace = Blockly.inject(document.getElementById('blocklyDiv'), {
        grid: {
          spacing: 25,
          length: 3,
          colour: '#ccc'
        },
        renderer: 'zelos',
        theme: Theme,
        zoom: {
          controls: true,
          startScale: 0.9,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        move: {
          scrollbars: {
            horizontal: true,
            vertical: true
          },
          drag: true,
          wheel: true
        },
        toolbox: toolbox(val)
      });

      Blockly.Xml.domToWorkspace(dom, newWorkspace);
      // Update the workspace in the vuex store
      this.$store.commit('setWorkspace', {
        workspace: newWorkspace
      });

      // Return the workspace
      return workspace;
    },
    setLanguage(locale) {
      switch (locale) {
        case 'en':
          // Change Blockly language for default blocks
          Blockly.setLocale(blocklyLocaleEN);
          // Change Blockly language for custom blocks
          customLocaleEN.applyBlocklyLocale();
          // Change website languages (navbar, etc...)
          this.$root.$i18n.locale = 'en';
          break;
        case 'fr':
          // Change Blockly language for default blocks
          Blockly.setLocale(blocklyLocaleFR);
          // Change Blockly language for custom blocks
          customLocaleFR.applyBlocklyLocale();
          // Change website languages (navbar, etc...)
          this.$root.$i18n.locale = 'fr';
          break;
        case 'pt':
          // Change Blockly language for default blocks
          Blockly.setLocale(blocklyLocalePT);
          // Change Blockly language for custom blocks
          customLocalePT.applyBlocklyLocale();
          // Change website languages (navbar, etc...)
          this.$root.$i18n.locale = 'pt';
          break;
        default:
          break;
      }
    },
    getWorkspaceCode() {
      const workspace = this.$store.state.workspace;
      if (!workspace) return '';
      let requires = [];
      let requiresjscode = [];
      let xml = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
      req(requires, requiresjscode, JavaScript.workspaceToCode(workspace), xml);
      setTimeout(async () => {
        await localforage.setItem('requires', requires);
      }, 1000);

      return `(async()=>{
  // Default imports
  const events = require('events');
  const { exec } = require("child_process")
  const logs = require("discord-logs")
  const Discord = require("discord.js")
  const {
    Permissions
  }= require("discord.js")
  const fs = require('fs');
  let process = require('process');
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Block imports
  ${requires.join('\n  ')}

  // Define s4d components (pretty sure 90% of these arnt even used/required)
  let s4d = {
    fire: null,
    joiningMember: null,
    reply: null,
    player: null,
    manager: null,
    Inviter: null,
    message: null,
    notifer: null
  };

  // Check if d.js is v14
  if (!require('./package.json').dependencies['discord.js'].startsWith("^14.")) {
    exec('npm i 14.21.0');
    throw new Error("Seems you arent using v14 please re-run or run \`npm i discord.js@14.21.0\`");
  }

  // Check if discord-logs is v2
  if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
    exec('npm i discord-logs@2.2.1');
    throw new Error("discord-logs needs to be 2.2.0 or higher. please re-run or if that fails run \`npm i discord-logs@2.2.1\` then re-run");
  }

  // Create a new discord client
  s4d.client = new Discord.Client({
    intents: [
      Object.values(Discord.GatewayIntentBits).reduce((acc, p) => acc | p, 0)
    ],
    partials: [
      Discord.Partials.Channel,
      Discord.Partials.Reaction
    ]
  });

  // When the bot is connected say so
  s4d.client.on(Discord.Events.ClientReady, () => {
    console.log(s4d.client.user.tag + " is alive!")
  })

  // upon error print "Error!" and the error
  process.on('uncaughtException', function (err) {
    console.log('Error!');
    console.log(err);
  });

  // give the new client to discord-logs
  logs(s4d.client);

  // pre blockly code
  ${requiresjscode.join('\n  ')}

  // blockly code
  ${JavaScript.workspaceToCode(workspace).split('\n').join('\n  ')}
  return s4d;
})();`;
    }
  }
});

app.use(store);
app.use(i18n);

app.mount('#app');

savenload(app, i18n.global.t);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue3-tour/dist/vue3-tour.css';
