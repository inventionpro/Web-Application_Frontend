<script setup>
function openCodeModal() {
  document.getElementById('code-modal')?.show();
}
</script>

<template>
  <b-nav-item-dropdown :text="$t('file.title')" right>
    <b-dropdown-item @click="askForFile">{{ $t('file.open') }}</b-dropdown-item>
    <input hidden @change="load" id="load-code" type="file" accept=".s4d,.zip,.xml" />
    <b-dropdown-item @click="openCodeModal">{{ $t('file.javascript') }}</b-dropdown-item>
    <b-dropdown-item @click="copy">{{ $t('file.copy') }}</b-dropdown-item>
    <b-dropdown-item @click="save">{{ $t('file.save') }}</b-dropdown-item>
    <b-dropdown-item @click="saveas">Replace</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import * as Blockly from 'blockly/core';
import { javascriptGenerator as JavaScript } from 'blockly/javascript';
import JSZip from 'jszip';
import beautify from 'js-beautify';
import localforage from 'localforage';
import Swal from 'sweetalert2';
import * as smm from './cbmodule.js';
import * as blocklyModule from '../../blocks/blocklyModule.js';
function fetchCustomBlocks(dataobj, loadfunc) {
  if (!window.isInS4DDebugMode) {
    const menu = blocklyModule.menus.createMenu({
      width: 640,
      height: 240
    });
    menu.content.style.textAlign = 'center';
    menu.content.append(document.createElement('br'));
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Enter Debug Mode to use custom blocks as it is experimental currently.';
    const clear = menu.createDecoratedButton();
    clear.innerHTML = 'Remove custom blocks from my autosaves';
    clear.onclick = () => {
      clear.innerHTML = 'Removing...';
      localforage
        .removeItem('autosave_customBlocks')
        .then(() => {
          clear.innerHTML = 'Cleared!';
        })
        .catch(() => {
          clear.innerHTML = 'An error occurred';
        });
    };
    menu.content.append(h3);
    menu.content.append(document.createElement('br'));
    menu.content.append(document.createElement('br'));
    menu.content.append(clear);
    return;
  }
  let customblocks = {};
  try {
    customblocks = JSON.parse(dataobj.customBlocks);
  } catch (err) {
    this.$toast.open({
      message: 'Custom block data for this file is corrupted.',
      type: 'error',
      dismissible: true,
      duration: 10000
    });
    console.warn('An error occurred when loading custom blocks!', String(err).substring(0, 250));
    if (loadfunc) loadfunc();
    return;
  }
  const blocks = customblocks;
  const bringBack_setTimeout = window.setTimeout;
  const bringBack_setInterval = window.setInterval;
  const bringBack_fetch = window.fetch;
  if (!window.Worker) window.Worker = null;
  const bringBack_Worker = Worker;
  if (!window.SharedWorker) window.SharedWorker = null;
  const bringBack_SharedWorker = SharedWorker;
  if (!window.ServiceWorker) window.ServiceWorker = null;
  const bringBack_ServiceWorker = ServiceWorker;
  window.setTimeout = null;
  window.setInterval = null;
  window.fetch = null;
  window.Worker = null;
  window.SharedWorker = null;
  window.ServiceWorker = null;
  window.BlocklyService = {};
  window.BlocklyService.Blocks = {};
  window.BlocklyService.JavaScript = {};
  window.BlocklyService.JavaScript = JavaScript;
  blocks.forEach((block) => {
    let works = true;
    try {
      Blockly.Blocks[block.name] = {
        init: function () {
          eval(block.blocks);
        }
      };
      smm.bypassStrictModeRegister(block.name, block.javascript);
    } catch (err) {
      console.warn('An error occurred when loading a custom block!', String(err).substring(0, 250));
      works = false;
    } finally {
      if (works) {
        window.customBlocks.push(block.name);
        window.saveCustomBlocksOutput.push(block);
      }
    }
  });
  localforage.setItem('autosave_customBlocks', JSON.stringify(window.saveCustomBlocksOutput));
  window.setTimeout = bringBack_setTimeout;
  window.setInterval = bringBack_setInterval;
  window.fetch = bringBack_fetch;
  window.Worker = bringBack_Worker;
  window.SharedWorker = bringBack_SharedWorker;
  window.ServiceWorker = bringBack_ServiceWorker;
  if (loadfunc) loadfunc();
  window.loadtoolboxfuncinternal();
}
window.fetchCustomBlocks = fetchCustomBlocks;
export default {
  name: 'FileMenu',
  mounted() {
    /*
    window.addEventListener('beforeunload', function (evt) {
      let currentWorkspaceContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(this.$store.state.workspace));
      changesAreUnsaved = workspaceContent != currentWorkspaceContent;
      if (!changesAreUnsaved) return;
      evt.preventDefault();
      evt.returnValue = 'You have unsaved blocks! Are you sure?';
      return;
    });*/
    localforage.getItem('utilitiesShortcuts').then((item) => {
      if (item == false) return;
      window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key == 's') {
          e.preventDefault();
          if (e.altKey) {
            this.saveas();
          } else {
            this.save();
          }
          return false;
        }
      });
    });
  },
  methods: {
    copy() {
      var url = beautify.js(this.getWorkspaceCode(), {
        indent_size: 2,
        max_preserve_newlines: 2,
        preserve_newlines: true,
        break_chained_methods: true,
        brace_style: 'collapse,preserve-inline',
        space_before_conditional: true,
        space_in_empty_paren: true
      });
      navigator.clipboard.writeText(url);
    },
    askForFile() {
      document.querySelector('#load-code').click();
    },
    async load() {
      Swal.fire({
        theme: 'auto',
        title: this.$t('file.confirm.title'),
        text: this.$t('file.confirm.text'),
        icon: 'warning',
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: this.$t('file.confirm.yes'),
        cancelButtonText: this.$t('file.confirm.cancel'),
        denyButtonText: this.$t('file.confirm.no'),
        customClass: {
          denyButton: 'red-button'
        },
        allowOutsideClick: false
      }).then(async (result) => {
        if (result.isDismissed) {
          return;
        } else if (result.isConfirmed) {
          window.blocklyWorkspaceGlobalRef.clear();
        }
        const file = document.getElementById('load-code').files[0];
        document.getElementById('load-code').value = '';
        const documentName = file.name.split('.').slice(0, file.name.split('.').length - 1);
        document.getElementById('docName').textContent = documentName;
        document.title = `Scratch For Discord - ${document.getElementById('docName').textContent}`;
        const reader = new FileReader();
        reader.onload = async (e) => {
          if (file.type == 'text/xml') {
            const decoder = new TextDecoder('utf-8');
            const raw = decoder.decode(e.target.result);
            const xml = Blockly.utils.xml.textToDom(raw);
            Blockly.Xml.domToWorkspace(xml, window.blocklyWorkspaceGlobalRef);
            return;
          }
          JSZip.loadAsync(e.target.result)
            .then(async (data) => {
              const dataObject = {};
              if (data.file('blocks.xml')) {
                dataObject.xml = await data.file('blocks.xml').async('string');
              }
              if (data.file('customBlocks.json')) {
                dataObject.customBlocks = await data.file('customBlocks.json').async('string');
              }
              return dataObject;
            })
            .then((dataobj) => {
              if (dataobj.xml == null) return;
              function load() {
                const xml = Blockly.utils.xml.textToDom(dataobj.xml);
                Blockly.Xml.domToWorkspace(xml, window.blocklyWorkspaceGlobalRef);
              }
              if (dataobj.customBlocks == null) {
                load();
                return;
              }
              fetchCustomBlocks(dataobj, load);
            })
            .catch((err) => {
              this.$toast.open({
                message: this.$t('load.error'),
                type: 'error',
                dismissible: true,
                duration: 10000
              });
              console.warn('An error occurred when loading a file!', String(err).substring(0, 250));
            });
        };
        if (file) {
          reader.readAsArrayBuffer(file);
          document.getElementById('load-code').setAttribute('value', '');
        }
      });
    },
    save() {
      const zip = new JSZip();
      const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(window.blocklyWorkspaceGlobalRef));
      const fileName = `${encodeURIComponent(document.getElementById('docName').textContent).replace(/%20/g, ' ')}.s4d`;
      zip.file('blocks.xml', xmlContent);
      if (window.saveCustomBlocksOutput.length > 0) {
        zip.file('customBlocks.json', JSON.stringify(window.saveCustomBlocksOutput));
        localforage.setItem('autosave_customBlocks', JSON.stringify(window.saveCustomBlocksOutput));
      }
      zip
        .generateAsync({
          type: 'blob'
        })
        .then((blob) => {
          const a = document.createElement('a');
          a.style = 'display: none';
          document.body.appendChild(a);
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          // changesAreUnsaved = false
          // workspaceContent = xmlContent
        });
    },
    saveas() {
      const zip = new JSZip();
      const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(window.blocklyWorkspaceGlobalRef));
      zip.file('blocks.xml', xmlContent);
      if (window.saveCustomBlocksOutput.length > 0) {
        zip.file('customBlocks.json', JSON.stringify(window.saveCustomBlocksOutput));
        localforage.setItem('autosave_customBlocks', JSON.stringify(window.saveCustomBlocksOutput));
      }
      zip
        .generateAsync({
          type: 'blob'
        })
        .then(async (blob) => {
          const fileHandle = await window.showSaveFilePicker({
            types: [
              {
                description: 'S4D Bot File',
                accept: { 'application/zip': ['.s4d'] }
              }
            ]
          });
          const fileStream = await fileHandle.createWritable();
          await fileStream.write(blob);
          await fileStream.close();
          // changesAreUnsaved = false
          // workspaceContent = xmlContent
        });
    }
  }
};
</script>
