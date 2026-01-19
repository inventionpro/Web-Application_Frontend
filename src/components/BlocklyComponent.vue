<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv" id="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="font-family: sans-serif">
      <slot></slot>
    </xml>
  </div>
</template>

<script>
import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import swal from 'sweetalert2';
import * as blocklyModule from '../blocks/blocklyModule.js';
import * as customBlockModule from './NavigationBar/cbmodule.js';
import { disableUnapplicable } from '../restrictions.js';
import toolbox from '../toolbox.js';

import { Backpack } from '@blockly/workspace-backpack';
import { WorkspaceSearch } from '@blockly/plugin-workspace-search';
import theme from '@blockly/theme-dark';
import customBlockBuilderTheme from '@blockly/theme-dark';
import Load from '../backpack-save-load.js';
import localforage from 'localforage';

// Custom renderes via path
let renderer = 'zelos';
switch (String(window.location.pathname).replace(/\//gim, '')) {
  case 'rge':
    renderer = 'geras';
    break;
  case 'rmi':
    renderer = 'minimalist';
    break;
  case 'rth':
    renderer = 'thrasos';
    break;
}
window.renderer = renderer;

// pre-define a bunch of stuff so the search load times are better
let coolbox = toolbox([]).split('\n');
let resbox = {};
let working = [];
let commented = 0;
coolbox.forEach((line) => {
  if (line.includes('<!--')) commented++;
  if (line.includes('-->')) commented--;
  if (line.includes('-->') && line.includes('<!--')) commented++;
  if (commented < 0) commented = 0;
  if (commented < 1) {
    if (line.includes('<category name="') && !line.includes('"/>')) {
      let temp = line.replaceAll(' ', '%20').replaceAll('"', '" ').replaceAll('=" ', '"').split('"')[1].replaceAll('%20', ' ');
      working.push(temp);
    }
    if (line.includes('<block') && working.length > 0 && commented < 1) {
      let block = line.split('"');
      const path = "'" + working.join('>') + "'";
      if (block == null) {
        return;
      }
      block = block[1];

      if (block == 'text') {
        resbox[block] = ["'Text'"];
        return;
      }
      if (block == 'math_number') {
        resbox[block] = ["'Math'"];
        return;
      }

      if (!resbox[block]) resbox[block] = [];
      if (resbox[block].includes(path)) return;
      resbox[block].push(path);
    }
    if (line.includes('</category>') && commented < 1) {
      working.pop();
    }
  }
  if (line.includes('-->') && line.includes('<!--')) commented--;
});

const BlocklyB = Object.getOwnPropertyNames(Blockly.Blocks);
let blocks = Object.getOwnPropertyNames(resbox); // define blocks so pre search works imediatly
let HIDEN_BLOCKS = ['frost_image', 'frost_drop1', 'colour_picker', 'frost_translate', 'variables_get', 'procedures_callnoreturn', 'procedures_callreturn', 'variables_get_dynamic', 'variables_set_dynamic', 'variables_set', 'math_change', 'procedures_ifreturn', 'procedures_defreturn', 'procedures_defnoreturn', 'controls_ifelse', 'jg_blocklyfp_load_workspace', 'jg_blocklyfp_load_workspace_website', 'lasercat_jg_case_default_INTERNAL_default', 'lasercat_jg_case_default_INTERNAL_case4', 'lasercat_jg_case_default_INTERNAL_case3', 'lasercat_jg_case_default_INTERNAL_case2', 'lasercat_jg_case_default_INTERNAL_case1', 'jg_events_all_label', 'jg_testing_urmother_epic_block_test_deez_mf_nuts'];

let preadded = [];
BlocklyB.filter((block) => {
  if (Blockly.Blocks[block].isHiden || javascriptGenerator[block] == null) {
    HIDEN_BLOCKS.push(block);
    preadded.push(block);
  }
});

export default {
  name: 'BlocklyComponent',
  props: ['options'],
  data() {
    return {
      toastLogin: false,
      toastDB: false,
      toastRegister: false,
      workspace: this.$store.state.workspace
    };
  },
  async mounted() {
    const allow_toolbox_search = false;
    const isMobile = function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    function prepToolbox(toolbox_content, searching, favorites, pooopewwweewwww, searchparameter = '') {
      const default_max_length = 250;
      let CATEGORYCONTENT = `<label text="Error failed to get block(s)..." web-class="boldtext"></label>`;

      if (searching == 'baiuyfg8iu4ewf643o8ir') {
        blocks.forEach((block) => {
          let xml = Blockly.utils.xml.textToDom(`<block type="${block}"/>`);
          block = Blockly.Xml.domToBlock(xml, pooopewwweewwww);
          block.moveBy(Math.round(Math.random() * 5000), Math.round(Math.random() * 5000));
          return;
        });
      }
      if (searching == 'f9u42r8hg329rehsfhoiewgf37') {
        blocks.forEach((block) => {
          const xml = Blockly.utils.xml.textToDom(`<xml><block type="${block}"/></xml>`);
          Blockly.Xml.appendDomToWorkspace(xml, pooopewwweewwww);
        });
        return;
      }
      if (searching) {
        // search category controler
        // why are so many blocks not defined before this all runs 😭
        const BlocklyB = Object.getOwnPropertyNames(Blockly.Blocks);
        blocks = BlocklyB.filter((block) => Blockly.Blocks[block].init != null);

        let warnings = [];

        BlocklyB.filter((block) => {
          if (Blockly.Blocks[block].isHiden && !preadded.includes(block) && HIDEN_BLOCKS.includes(block)) {
            console.warn(`${block} is already registerd as hiden! either remove ${block} from "src/components/BlocklyComponent.vue > HIDEN_BLOCKS" or remove the "isHiden" tag from the block defnintion`);
            warnings.push(block);
          }
          if (javascriptGenerator[block] == null && !preadded.includes(block) && HIDEN_BLOCKS.includes(block)) {
            console.log(javascriptGenerator[block]);
            console.warn(`${block} doesnt have a export! and thus doesnt need to be in "src/components/BlocklyComponent.vue > HIDEN_BLOCKS"! please remove ${block} from "src/components/BlocklyComponent.vue > HIDEN_BLOCKS"!`);
            warnings.push(block);
          }
          if ((Blockly.Blocks[block].isHiden || javascriptGenerator[block] == null) && !HIDEN_BLOCKS.includes(block)) {
            HIDEN_BLOCKS.push(block);
            preadded.push(block);
          }
        });
        if (warnings.length > 0) {
          console.log(`please adress all warnings created!`);
          console.log(`warnings: [${warnings.join('\n  ')}
]`);
          console.log(`resulting hiden list: [
            "${HIDEN_BLOCKS.filter((block) => !preadded.includes(block) && !warnings.includes(block)).join('",\n            "')}"
          ]`);
        }

        searchparameter = searchparameter.replaceAll(/[^a-zA-Z0-9_]/gm, '_').toLowerCase();
        let search_res = blocks.filter((block) => (block.includes(searchparameter) && !HIDEN_BLOCKS.includes(block)) || (searchparameter == 'hidden' && HIDEN_BLOCKS.includes(block)));

        if (search_res.length < 1) {
          CATEGORYCONTENT = `<label text="No blocks where found with &quot;${searchparameter}&quot; in the name..." web-class="boldtext"></label>`;
        }
        if (search_res.length > 0) {
          CATEGORYCONTENT = `
            <label text="Found ${search_res.length} blocks with &quot;${searchparameter}&quot; in there name${search_res.length > 100 ? ' showing first 100' : ''}" web-class="boldtext"></label>
            <label text="ㅤ" web-class="boldtext"></label>
            ${search_res
              .slice(0, default_max_length)
              .map((block) => {
                return `<label text="${block.replace(searchparameter, `${searchparameter.toUpperCase()}`)} ${resbox[block] == null ? ' isnt in the toolbox' : 'is in ' + resbox[block].join(' and ')}" web-class="boldtext"></label>
<block type="${block}"/>`;
              })
              .join('\n')}`;
        }
      } else {
        const lessthan = blocks.length < default_max_length;
        let newblocks = (lessthan ? blocks : blocks.slice(0, default_max_length)).filter((block) => !HIDEN_BLOCKS.includes(block));
        if (newblocks.length > 0) {
          CATEGORYCONTENT = `<label text="ㅤ" web-class="boldtext"></label>
${newblocks.map((block) => `<block type="${block}"/>`).join('\n')}
${!lessthan ? `<label text="${blocks.length - default_max_length} blocks left..." web-class="boldtext"></label>` : ''}`;
        }
      }
      var returned_stuff = toolbox_content?.replace(
        '<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->',
        `<label text="There are currently ${blocks.length} blocks in S4D." web-class="boldtext"></label>
<label text="ㅤ" web-class="boldtext"></label>
${CATEGORYCONTENT}`
      );

      // for custom categories
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('customXML')) {
        var custom_xml = urlParams.get('customXML');
        let temp1 = String(custom_xml).replaceAll('□', '\n');
        let temp2 = String(temp1).replaceAll('▣', '#');
        let appearances = temp2.split('※360※').length;
        for (let i = 0; i < appearances; i++) {
          temp2 = temp2.replace('※360※', String(Math.round(Math.random() * 360)));
        }
        custom_xml = temp2;
        if (urlParams.has('no-base-category') && urlParams.get('no-base-category') == 'true') {
          returned_stuff = (`<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">` + custom_xml + `</xml>`).replace('<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->', CATEGORYCONTENT);
        } else {
          returned_stuff = (returned_stuff.replace('</xml>', '') + custom_xml + '</xml>').replace('<!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->', CATEGORYCONTENT);
        }
      }

      return String(returned_stuff);
    }
    window.loadtoolboxfuncinternal = prepToolbox;
    async function logtoolblocks(remove_underscore) {
      const toolxml = toolbox([]);
      const toolboxArray = toolxml.split('\n');
      var blocks = [];
      var loop = 0;
      var pushed;
      var repeat_end = toolboxArray.length;
      for (var count = 0; count < repeat_end; count++) {
        if (toolboxArray[loop].includes('<block type="')) {
          pushed = toolboxArray[loop].replaceAll(' ', '').replaceAll('blocktype="', '').replaceAll('/', '').replaceAll('<', '').replaceAll('"', '').replaceAll("'", '').replaceAll('\t', '');
          pushed = pushed.slice(0, pushed.indexOf('>'));
          if (remove_underscore) {
            pushed = pushed.replaceAll('_', ' ');
          }
          blocks.push(pushed);
        }
        loop++;
      }
      console.log(blocks);
    }

    if (allow_toolbox_search) {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Search for block',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          var new_toolbox_xml = prepToolbox(toolbox(val), true, val);
          workspace.updateToolbox(new_toolbox_xml);
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'searchblock',
        weight: 99
      });
    }

    localforage.getItem('utilitiesShortcuts').then((item) => {
      if (item != false) {
        window.addEventListener('keydown', (evt) => {
          if (evt.altKey) {
            if (['t', 'n', 'm', 'c', 'e', 'a', 'w', 'b', 'i', '=', 'N', 'A'].includes(evt.key)) {
              let blockToPlace = 'text';
              if (evt.key == 't') {
                blockToPlace = 'text';
              } else if (evt.key == 'm') {
                blockToPlace = 's4d_message_content';
              } else if (evt.key == 'c') {
                blockToPlace = 'colour_picker';
              } else if (evt.key == 'e') {
                blockToPlace = 'frost_other_err';
              } else if (evt.key == 'A' && evt.shiftKey) {
                blockToPlace = 'logic_operation';
              } else if (evt.key == 'a') {
                blockToPlace = 's4d_message_author';
              } else if (evt.key == 'w') {
                blockToPlace = 's4d_on_message';
              } else if (evt.key == 'b') {
                blockToPlace = 'logic_boolean';
              } else if (evt.key == 'i') {
                blockToPlace = 'controls_if';
              } else if (evt.key == '=') {
                blockToPlace = 'logic_compare';
              } else if (evt.key == 'N' && evt.shiftKey) {
                blockToPlace = 'logic_negate';
              } else if (evt.key == 'n') {
                blockToPlace = 'math_number';
              }
              let workspace_xml = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
              let xml_blocks = workspace_xml.split('\n');
              var xpos = [];
              var ypos = [];
              for (var count = 0; count < xml_blocks.length; count++) {
                var current = xml_blocks[count];
                if (current.includes('<block type="') && current.includes('x="') && current.includes('y="')) {
                  xpos.push(current.substring(current.indexOf('x="') + 3, current.indexOf(' y="') - 1));
                  ypos.push(current.substring(current.indexOf('y="') + 3, current.indexOf('">')));
                }
              }
              var dx = 0;
              var dy = 0;
              if (xpos && ypos) {
                dx = xpos.slice(-1)[0];
                dy = ypos.slice(-1)[0];
              }
              if (Blockly.getSelected()) {
                let selected = Blockly.getSelected().toCopyData();
                dx = selected.saveInfo.x;
                dy = selected.saveInfo.y;
              }
              let xml = Blockly.utils.xml.textToDom(`<block type="${blockToPlace}"></block>`);
              let block = Blockly.Xml.domToBlock(xml, workspace);
              if (Number(dx) && Number(dy)) {
                block.moveBy(Number(dx), Number(dy));
              }
            } else if (evt.ctrlKey) {
              if (Blockly.getSelected()) {
                let xml = Blockly.Xml.blockToDom(Blockly.getSelected());
                let block = Blockly.Xml.domToBlock(xml, workspace);
                let selected = Blockly.getSelected().toCopyData();
                let dx = selected.saveInfo.x;
                let dy = selected.saveInfo.y;
                block.moveBy(Number(dx) + 5, Number(dy) + 5);
              }
            }
          }
        });
      }
    });

    window.s4dDebugEvents.push(() => {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Spawn block via Internal name',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          let input = prompt('Block Internal Name');
          if (!input) {
            return;
          }
          let xml = Blockly.utils.xml.textToDom('<xml><block type="' + input + '"></block></xml>');
          try {
            Blockly.Xml.appendDomToWorkspace(xml, workspace);
          } catch (err) {
            console.log('could not spawn block!', err);
            alert(`Block ${String(input)} does not exist or was not defined correctly`);
          }
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'spawnblock',
        weight: 500
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Spawn all toolblocks',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          prepToolbox(toolbox(val), 'baiuyfg8iu4ewf643o8ir', null, workspace);
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'spawnalltoolblocks',
        weight: 9990
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Spawn all toolblocks (ordered)',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          prepToolbox(toolbox(val), 'f9u42r8hg329rehsfhoiewgf37', null, workspace);
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'spawnalltoolblocks2',
        weight: 9995
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Recolor all blocks',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          let color = prompt('New color?');
          workspace.getAllBlocks().forEach((block) => {
            try {
              if (color == 'random') {
                block.setColour(
                  '#' +
                    Math.floor(Math.random() * 0xffffff)
                      .toString(16)
                      .padStart(6, '0')
                );
              } else block.setColour(color);
            } catch (err) {
              console.warn(err);
            }
          });
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'recolorallblocks',
        weight: 10000
      });
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Log Workspace XML',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          console.log(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace)));
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'logworkspacexml',
        weight: 10005
      });
    });

    localforage.getItem('hide-blockcount').then((item) => {
      if (String(item) === 'true') {
        document.getElementById('block-counter')?.remove();
      }
    });

    window.s4dDebugEvents.push(() => {
      Blockly.ContextMenuRegistry.registry.register({
        displayText: 'Log all Toolbox blocks',
        preconditionFn: function () {
          return 'enabled';
        },
        callback: function () {
          logtoolblocks(true);
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'logtoolblocks',
        weight: 500
      });
    });

    let val = (await localforage.getItem('fav')) === null ? null : await localforage.getItem('fav');
    setInterval(async () => {
      val = (await localforage.getItem('fav')) === null ? null : await localforage.getItem('fav');
    }, 1000);

    function svgToPng_(data, width, height, callback) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var img = new Image();

      var pixelDensity = 5;
      let maxScaleI = 4096;
      var highestCScale = 0;
      var newWidth = width * pixelDensity;
      var newHeight = height * pixelDensity;

      if (newWidth > maxScaleI || newHeight > maxScaleI) {
        if (newWidth > newHeight) {
          highestCScale = newWidth;
        } else {
          highestCScale = newHeight;
        }
        newWidth = Math.round((newWidth / highestCScale) * maxScaleI);
        newHeight = Math.round((newHeight / highestCScale) * maxScaleI);
      }

      canvas.width = newWidth;
      canvas.height = newHeight;
      img.onload = function () {
        context.drawImage(img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
        try {
          var dataUri = canvas.toDataURL('image/png');
          callback(dataUri);
        } catch (err) {
          console.warn('Error converting the workspace svg to a png');
          callback('');
        }
      };
      img.src = data;
    }

    function workspaceToSvg_(workspace, callback, customCss) {
      // Go through all text areas and set their value.
      var textAreas = document.getElementsByTagName('textarea');
      for (var i = 0; i < textAreas.length; i++) {
        textAreas[i].innerHTML = textAreas[i].value;
      }

      var bBox = workspace.getBlocksBoundingBox();
      var x = bBox.x || bBox.left;
      var y = bBox.y || bBox.top;
      var width = bBox.width || bBox.right - x;
      var height = bBox.height || bBox.bottom - y;

      var blockCanvas = workspace.getCanvas();
      var clone = blockCanvas.cloneNode(true);
      clone.removeAttribute('transform');

      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.appendChild(clone);
      svg.setAttribute('viewBox', x + ' ' + y + ' ' + width + ' ' + height);

      svg.setAttribute('class', 'blocklySvg ' + (workspace.options.renderer || 'geras') + '-renderer ' + (workspace.getTheme ? workspace.getTheme().name + '-theme' : ''));
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
      svg.setAttribute('style', 'background-color: transparent');

      var css = [].slice
        .call(document.head.querySelectorAll('style'))
        .filter(function (el) {
          return /\.blocklySvg/.test(el.innerText) || el.id.indexOf('blockly-') === 0;
        })
        .map(function (el) {
          return el.innerText;
        })
        .join('\n');
      var style = document.createElement('style');
      style.innerHTML = css + '\n' + customCss;
      svg.insertBefore(style, svg.firstChild);

      var svgAsXML = new XMLSerializer().serializeToString(svg);
      svgAsXML = svgAsXML.replace(/&nbsp/g, '&#160');
      var data = 'data:image/svg+xml,' + encodeURIComponent(svgAsXML);

      svgToPng_(data, width, height, callback);
    }

    Blockly.downloadScreenshot = function (workspace) {
      workspaceToSvg_(workspace, function (datauri) {
        var a = document.createElement('a');
        a.download = 'screenshot.png';
        a.target = '_self';
        a.href = datauri;
        document.body.appendChild(a);
        a.click();
        a.parentNode.removeChild(a);
      });
    };
    this.setLanguage(this.$store.state.blocklyLocale);
    const options = this.$props.options || {};
    options.toolbox = this.$refs['blocklyToolbox'];
    const workspace = Blockly.inject(this.$refs['blocklyDiv'], {
      ...options,
      ...{
        renderer: window.renderer ?? 'zelos',
        grid: {
          spacing: 25,
          length: 3,
          colour: '#ccc'
        },
        theme,
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
        toolbox: prepToolbox(toolbox(val), false, val)
      }
    });
    window.blocklyGlobalRef = Blockly;
    window.blocklyJSGlobalRef = javascriptGenerator;
    window.blocklyWorkspaceGlobalRef = workspace;
    workspace.registerButtonCallback('LAUNCHCUSTOMBLOCKBUILDER', function () {
      const menu = blocklyModule.menus.createMenu({
        width: 1280,
        height: 720,
        title: 'Custom Block Builder',
        zindex: 999
      });
      const inlineDiv = document.createElement('div');
      inlineDiv.style.display = 'flex';
      menu.content.append(inlineDiv);
      const blocklyDiv = document.createElement('div');
      blocklyDiv.style.flex = '0 0 85%';
      blocklyDiv.style.width = '85%';
      blocklyDiv.style.height = '720px';
      inlineDiv.append(blocklyDiv);
      const ntheme = customBlockBuilderTheme;
      ntheme.setFontStyle({
        family: 'monospace'
      });
      const customBlockWorkspace = Blockly.inject(blocklyDiv, {
        renderer: window.renderer ?? 'zelos',
        grid: {
          spacing: 25,
          length: 3,
          colour: '#ccc'
        },
        theme: ntheme,
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
        disable: false,
        comments: false,
        toolbox: customBlockModule.toolbox
      });
      const exportInitBlock = Blockly.Xml.domToBlock(Blockly.utils.xml.textToDom('<block type="jg_s4d_customBlocks_builder1_exportInit"/>'), customBlockWorkspace);
      exportInitBlock.setDeletable(false);
      const exportJavascriptBlock = Blockly.Xml.domToBlock(Blockly.utils.xml.textToDom('<block type="jg_s4d_customBlocks_builder1_exportJavascript"/>'), customBlockWorkspace);
      exportJavascriptBlock.setDeletable(false);
      exportInitBlock.moveBy(100, 100);
      exportJavascriptBlock.moveBy(600, 100);
      const buttonDiv = document.createElement('div');
      buttonDiv.style.flex = '1';
      const blockNameInput = document.createElement('input');
      blockNameInput.value = 'MyBlock';
      blockNameInput.placeholder = 'Block Name';
      blockNameInput.style.width = '100%';
      blockNameInput.type = 'text';
      blockNameInput.oninput = () => {
        let block = String(customBlockModule.createCustomBlockID(blockNameInput.value));
        const name = block.substring(block.lastIndexOf('_') + 1, block.length);
        if (name != blockNameInput.value) blockNameInput.value = name;
      };
      buttonDiv.append(blockNameInput);
      buttonDiv.append(document.createElement('br'));
      const createButton = menu.createDecoratedButton();
      createButton.style.margin = '0px';
      createButton.style.width = '100%';
      createButton.innerHTML = 'Create Block';
      createButton.onclick = () => {
        customBlockModule.createCustomBlock(customBlockModule.createCustomBlockID(blockNameInput.value), customBlockModule.stringToCustomBlockData(javascriptGenerator.workspaceToCode(customBlockWorkspace)));
        console.log(javascriptGenerator.workspaceToCode(customBlockWorkspace));
      };
      buttonDiv.append(createButton);
      const customBlockDeletorDiv = document.createElement('div');
      customBlockDeletorDiv.classList.add('s4d_customblocks_manager_deletor');
      let customBlocksInMemory = 0;
      const intv = setInterval(() => {
        if (customBlocksInMemory == window.customBlocks.length) return;
        console.log('updated custom block list!');
        customBlockDeletorDiv.innerHTML = '';
        window.customBlocks.forEach((blockName) => {
          const button = document.createElement('button');
          let block = blockName;
          const name = String(block.substring(block.lastIndexOf('_') + 1, block.length)).replace(/[^a-zA-Z0-9]/gim, '');
          button.innerHTML = name;
          button.onclick = () => {
            const usurebro = confirm('Are you sure you want to delete ' + name + '?');
            if (!usurebro) return;
            let target;
            window.saveCustomBlocksOutput.forEach((bloc) => {
              if (bloc.name == blockName) target = bloc;
            });
            if (!target) return alert('This block does not exist anymore!');
            window.blocklyWorkspaceGlobalRef.getAllBlocks().forEach((bloc) => {
              if (bloc.type == blockName) bloc.dispose();
            });
            window.customBlocks.splice(window.customBlocks.indexOf(blockName), 1);
            window.saveCustomBlocksOutput.splice(window.saveCustomBlocksOutput.indexOf(target), 1);
            localforage.setItem('autosave_customBlocks', JSON.stringify(window.saveCustomBlocksOutput));
            window.loadtoolboxfuncinternal();
            window.blocklyWorkspaceGlobalRef.toolbox_.clearSelection();
          };
          customBlockDeletorDiv.append(button);
        });
        customBlocksInMemory = window.customBlocks.length;
      }, 100);
      menu.onclosed = () => {
        clearInterval(intv);
      };
      buttonDiv.append(customBlockDeletorDiv);
      inlineDiv.append(buttonDiv);
    });
    workspace.registerButtonCallback('FFMPEG', function () {
      swal.fire({
        theme: 'auto',
        title: 'Hey uhh..',
        icon: 'info',
        text: "This isn't quite done yet..."
      });
    });
    window.loadtoolboxfuncinternal = () => {
      let new_toolbox_xml = prepToolbox(toolbox(val), false, val, workspace, null);
      workspace.updateToolbox(new_toolbox_xml);
    };
    workspace.registerButtonCallback('SEARCH', function () {
      if (isMobile()) {
        let res = String(prompt('Search for a block:'));
        let block = res.replaceAll(' ', '_').replaceAll('<', '_').replaceAll('>', '_').replaceAll('/', '_');
        let new_toolbox_xml = prepToolbox(toolbox(val), true, val, workspace, block);
        workspace.toolbox_.clearSelection();
        workspace.updateToolbox(new_toolbox_xml);
        workspace.toolbox_.clearSelection();
        return;
      }
      swal
        .fire({
          theme: 'auto',
          title: 'Search for a block',
          html: `<input type="text" id="block">`,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: 'Search'
        })
        .then(async (result) => {
          if (result) {
            let block = document.getElementById('block').value.replaceAll(' ', '_').replaceAll('<', '_').replaceAll('>', '_').replaceAll('/', '_');
            let new_toolbox_xml = prepToolbox(toolbox(val), true, val, workspace, block);
            workspace.toolbox_.clearSelection();
            workspace.updateToolbox(new_toolbox_xml);
            workspace.toolbox_.clearSelection();
          }
        });
    });
    /*
        let xml = Blockly.utils.xml.textToDom(`
<block type="s4d_login">
    <value name="TOKEN">
        <shadow type="text">
            <field name="TEXT">Your bot token</field>
        </shadow>
    </value>
</block>
`);
        let block = Blockly.Xml.domToBlock(xml, workspace)
        block.setDeletable(false)
*/

    // the best addition to s4d

    /*
        function corrupt(amount, charArray) {
            String.prototype.replaceAt = function (index, replacement) {
                return this.substring(0, index) + String(replacement) + this.substring(index + String(replacement).length);
            }
            const elements = document.getElementsByTagName("path")
            for (let i = 0; i < elements.length; i++) {
                let current = elements.item(i)
                let css = current.getAttribute("d")
                for (let j = 0; j < amount; j++) {
                    css = String(css).replaceAt(Math.round(Math.random() * String(css).length - 1), charArray[Math.round(Math.random() * charArray.length - 1)])
                }
                try {
                    current.setAttribute("d", css)
                } catch {
                    continue
                }
            }
        }
        window.addEventListener("click", () => {
            if (Math.round(Math.random() * 10) <= 3) return
            corrupt(20, ["0","1","2","3","4","5","6","7","8","9"])
        })
        */

    // uncomment the code and watch it all unfold
    // it is great
    //trust me\

    function themeBlocks(strokeColor, fillColor, specialTag) {
      // thanks Onur Yıldırım and Martin Delille for spoonfeed (real)
      function invertColor(hex) {
        if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
          throw new Error('Invalid HEX color.');
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
          g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
          b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return '#' + padZero(r) + padZero(g) + padZero(b);
      }
      function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
      }
      function hexToRgb(hex) {
        let arrBuff = new ArrayBuffer(4);
        let vw = new DataView(arrBuff);
        vw.setUint32(0, parseInt(hex, 16), false);
        let arrByte = new Uint8Array(arrBuff);
        return [arrByte[1], arrByte[2], arrByte[3]];
      }
      function componentToHex(color) {
        var hex = color.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
      }
      function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      const eventBlockSVGRegex = / m 0,0  m 0,4 a 4 4 0 0,1 4,-4  h [0-9.]* a 4 4 0 0,1 4,4  v 4  V 8  V 40  V 44 a 4 4 0 0,1 -4,4  H 64  c -2,0  -3,1  -4,2  l -4,4  c -1,1  -2,2  -4,2  h -12/gim;
      const outputBlockSVGRegex = / m [0-9]*,0  h [0-9.]* a 20 20 0 0,1 20,20  v 0 a 20 20 0 0,1 -20,20  V 40  h [0-9.-]* a 20 20 0 0,1 -20,-20  v 0 a 20 20 0 0,1 20,-20 z/gim;
      if (specialTag == 'scratch-top') {
        const elem2ents = document.getElementsByClassName('blocklyDraggable');
        for (let i = 0; i < elem2ents.length; i++) {
          let current2 = elem2ents.item(i);
          if (current2 == null) continue;
          const elements = current2.getElementsByClassName('blocklyPath');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            if (current == null) continue;
            if (current.getAttribute('d') == null) continue;
            if (current.getAttribute('d').match(eventBlockSVGRegex) != null) {
              const width = Number(
                current
                  .getAttribute('d')
                  .match(/h [0-9.]*/im)[0]
                  .replace('h ', '')
              );
              current.setAttribute('d', `m 0 0 c 25 -22 71 -22 96 0 H ${width + 3.5} a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 48 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H 4 a 4 4 0 0 1 -4 -4 z`);
              const asfcwsge = current2.getElementsByClassName('blocklyDraggable');
              if (asfcwsge.item(0) != null) asfcwsge.item(0).setAttribute('transform', 'translate(0,48.000000000000114)');
            } else {
              continue;
            }
          }
        }
      }
      if (specialTag == 'text-only') {
        const elem2ents = document.getElementsByClassName('blocklyPath');
        for (let i = 0; i < elem2ents.length; i++) {
          let current = elem2ents.item(i);
          current.setAttribute('d', '');
        }
      }
      if (specialTag == 'april-fools') {
        document.getElementById('navSpace').style = `background-color: rgb(255, 0, 255);`;
        document.getElementsByClassName('blocklyMainBackground').item(0).style = `fill:#00ff00;`;
        const text = document.getElementsByTagName('text');
        for (let i = 0; i < text.length; i++) {
          let current = text.item(i);
          if (String(current.style).includes(`font-family: Comic Sans MS!important;`)) return;
          current.style = `font-family: Comic Sans MS!important;`;
        }
        const images4d = document.getElementById('navigationBarS4DImage');
        images4d.setAttribute('width', '10');
        images4d.setAttribute('height', '45');
        const elem2ents = document.getElementsByClassName('blocklyDraggable');
        for (let i = 0; i < elem2ents.length; i++) {
          let current2 = elem2ents.item(i);
          if (current2 == null) continue;
          const elements = current2.getElementsByClassName('blocklyPath');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            if (current == null) continue;
            if (current.getAttribute('d') == null) continue;
            if (current.getAttribute('d').match(outputBlockSVGRegex) != null) {
              let width =
                Number(
                  current
                    .getAttribute('d')
                    .match(/h [0-9.]*/im)[0]
                    .replace('h ', '')
                ) - 55;
              const VISOR_WIDTH = width < 0 ? 0 : width;
              current.setAttribute('d', `m 77 0 h ${VISOR_WIDTH} a 20 20 0 0 1 20 20 v 0 a 20 20 0 0 1 -20 20 V 40 H 77 V 112 A 1 1 0 0 1 42 111 A 1 1 0 0 0 16 111 A 1 1 0 0 1 -18 111 V 74 H -29 C -35 74 -36 73 -36 67 V 5 C -36 -1 -35 -2 -29 -2 H -18 A 1 1 0 0 1 76 0`);
            } else {
              continue;
            }
          }
        }
      }
      const elements = document.getElementsByTagName('path');
      for (let i = 0; i < elements.length; i++) {
        let current = elements.item(i);
        if (current.getAttribute('stroke') == null) continue;
        if (current.getAttribute('fill') == null) continue;
        if (specialTag == 'invert') {
          if (current.getAttribute('strokeORG') == null) current.setAttribute('strokeORG', current.getAttribute('stroke'));
          if (current.getAttribute('fillORG') == null) current.setAttribute('fillORG', current.getAttribute('fill'));
          current.setAttribute('stroke', invertColor(String(current.getAttribute('strokeORG'))));
          current.setAttribute('fill', invertColor(String(current.getAttribute('fillORG'))));
        }
        if (specialTag == 'pastel') {
          if (current.getAttribute('strokeORG') == null) current.setAttribute('strokeORG', current.getAttribute('stroke'));
          if (current.getAttribute('fillORG') == null) current.setAttribute('fillORG', current.getAttribute('fill'));
          let rgb = hexToRgb(current.getAttribute('fillORG').substring(1));
          let r = rgb[0] + 72 > 255 ? 255 : rgb[0] + 72;
          let g = rgb[1] + 72 > 255 ? 255 : rgb[1] + 72;
          let b = rgb[2] + 72 > 255 ? 255 : rgb[2] + 72;
          let newRgb = rgbToHex(r, g, b);
          current.setAttribute('fill', newRgb);
          rgb = hexToRgb(current.getAttribute('strokeORG').substring(1));
          r = rgb[0] + 72 > 255 ? 255 : rgb[0] + 72;
          g = rgb[1] + 72 > 255 ? 255 : rgb[1] + 72;
          b = rgb[2] + 72 > 255 ? 255 : rgb[2] + 72;
          newRgb = rgbToHex(r, g, b);
          current.setAttribute('stroke', newRgb);
        }
        if (specialTag == 'textless') {
          let elements = document.getElementsByClassName('blocklyText');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName('blocklyText blocklyDropdownText');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName('blocklyMenuItemContent goog-menuitem-content');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName('blocklyFlyoutLabelText');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName('blocklyMenuItemContent goog-menuitem-content');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
          elements = document.getElementsByClassName('blocklyTreeLabel');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.remove();
          }
        }
        if (specialTag == 'toon') {
          let celements = document.getElementsByClassName('blocklyFieldRect blocklyDropdownRect');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            if (strokeColor != null) current.setAttribute('stroke', strokeColor);
          }
        }
        if (specialTag == 'neo') {
          current.setAttribute('stroke-width', '3');
          let celements = document.getElementsByClassName('blocklyEditableText');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            let c2elements = current.getElementsByClassName('blocklyFieldRect');
            for (let i = 0; i < c2elements.length; i++) {
              let current = c2elements.item(i);
              current.setAttribute('style', `fill:${fillColor}`);
              current.setAttribute('stroke-width', '3');
            }
            c2elements = current.getElementsByClassName('blocklyText');
            for (let i = 0; i < c2elements.length; i++) {
              let current = c2elements.item(i);
              current.setAttribute('style', 'fill:#ffffff');
            }
          }
          celements = document.getElementsByClassName('blocklyFieldRect blocklyDropdownRect');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute('stroke-width', '3');
          }
        }
        if (specialTag == 'gray') {
          if (current.getAttribute('strokeORG') == null) current.setAttribute('strokeORG', current.getAttribute('stroke'));
          if (current.getAttribute('fillORG') == null) current.setAttribute('fillORG', current.getAttribute('fill'));
          let rgb = hexToRgb(current.getAttribute('fillORG').substring(1));
          let r = rgb[0];
          let newRgb = rgbToHex(r, r, r);
          current.setAttribute('fill', newRgb);
          rgb = hexToRgb(current.getAttribute('strokeORG').substring(1));
          r = rgb[0];
          newRgb = rgbToHex(r, r, r);
          current.setAttribute('stroke', newRgb);
          let elements = document.getElementsByClassName('blocklyText');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.setAttribute('style', 'fill:#ffffff');
            current.setAttribute('stroke', '#000000');
          }
          elements = document.getElementsByClassName('blocklyFieldRect');
          for (let i = 0; i < elements.length; i++) {
            let current = elements.item(i);
            current.setAttribute('stroke', newRgb);
          }
        }
        if (specialTag == 'glow') {
          let celements = document.getElementsByClassName('blocklyText');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute('specializedCSS', 'glow');
          }
          celements = document.getElementsByClassName('blocklyEditableText');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            let celements2 = current.getElementsByClassName('blocklyText');
            for (let i = 0; i < celements2.length; i++) {
              let current = celements2.item(i);
              current.setAttribute('specializedCSS', 'darkglow');
            }
          }
        }
        if (specialTag == 'full-colors') {
          let rgb = hexToRgb(current.getAttribute('fill').substring(1));
          let r = rgb[0] >= 128 ? 255 : 0;
          let g = rgb[1] >= 128 ? 255 : 0;
          let b = rgb[2] >= 128 ? 255 : 0;
          let newRgb = rgbToHex(r, g, b);
          current.setAttribute('fill', newRgb);
          current.setAttribute('stroke', newRgb);
          let celements = document.getElementsByClassName('blocklyFieldRect blocklyDropdownRect');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute('stroke-width', '0');
          }
          celements = document.getElementsByClassName('blocklyFieldRect');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute('stroke-width', '0');
          }
          celements = document.getElementsByClassName('blocklyOutlinePath');
          for (let i = 0; i < celements.length; i++) {
            let current = celements.item(i);
            current.setAttribute('fill', newRgb);
          }
        }
        if (strokeColor != null) current.setAttribute('stroke', strokeColor);
        if (fillColor != null) current.setAttribute('fill', fillColor);
      }
    }
    setInterval(themeSwitchingHandler, 50);
    function themeSwitchingHandler() {
      localforage.getItem('utilitiesTheme').then((theme) => {
        switch (theme) {
          case 'neo':
            themeBlocks(null, '#202020', 'neo');
            break;
          case 'toon':
            themeBlocks('#000000', null, 'toon');
            break;
          case 'invert':
          case 'pastel':
          case 'textless':
          case 'gray':
          case 'glow':
          case 'scratch-top':
          case 'full-colors':
          case 'text-only':
            themeBlocks(null, null, theme);
            break;
        }
      });
    }

    // Month starts at 0, day starts at 1
    if (new Date().getMonth() == 3 && new Date().getDate() == 1) {
      setInterval(() => {
        themeBlocks(null, null, 'april-fools');
      }, 50);
    }

    try {
      Blockly.ContextMenuRegistry.registry.unregister('fav');
      Blockly.ContextMenuRegistry.registry.unregister('image');
    } catch {
      // Ignore :3
    }

    Blockly.ContextMenuRegistry.registry.register({
      displayText: 'Download Workspace Image',
      preconditionFn: function () {
        return 'enabled';
      },
      callback: function () {
        Blockly.downloadScreenshot(workspace);
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
      id: 'image',
      weight: 100
    });
    Blockly.ContextMenuRegistry.registry.register({
      displayText: function (scope) {
        return val && val.includes(scope.block.type) ? 'Remove from favorite' : 'Add to favorite';
      },
      preconditionFn: function () {
        return 'enabled';
      },
      callback: async function (scope) {
        let type = scope.block.type;

        function arrayRemove(arr, value) {
          return arr.filter(function (ele) {
            return ele != value;
          });
        }

        if (val && val.includes(scope.block.type)) {
          if (arrayRemove(await localforage.getItem('fav'), type).length === 0) {
            await localforage.setItem('fav', null);
          } else {
            await localforage.setItem('fav', arrayRemove(await localforage.getItem('fav'), type));
          }
        } else {
          if (val === null) {
            await localforage.setItem('fav', [type]);
          } else {
            val.push(type);
            await localforage.setItem('fav', val);
          }
        }

        val = (await localforage.getItem('fav')) === null ? null : await localforage.getItem('fav');
        let new_toolbox_xml = prepToolbox(toolbox(val), false, val);
        workspace.updateToolbox(new_toolbox_xml);
      },
      scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
      id: 'fav',
      weight: 100
    });

    const workspaceSearch = new WorkspaceSearch(workspace);
    workspaceSearch.init();
    workspaceSearch.close();

    const backpack = new Backpack(workspace, {
      contextMenu: {
        emptyBackpack: true,
        removeFromBackpack: true,
        copyToBackpack: true,
        copyAllToBackpack: true,
        pasteAllToBackpack: true,
        disablePreconditionChecks: true
      }
    });
    backpack.init();
    Load(backpack, workspace);
    this.$store.commit('setWorkspace', {
      workspace
    });
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    this.$nextTick(() => {
      window.setInterval(() => {
        disableUnapplicable(this.$store.state.workspace);
        const getAllBlocksInWorkspace = this.$store.state.workspace.getAllBlocks(false);
        const loginBlock = getAllBlocksInWorkspace.some((block) => block.type === 's4d_login');
        const db1 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_add_data_new');
        const db2 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_database_create_new');
        const db3 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_delete_all_data_new');
        const db4 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_delete_data_new');
        const db5 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_get_all_data_new');
        const db6 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_get_data_new');
        const db7 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_has_data_new');
        const db8 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_set_data_new');
        const db9 = getAllBlocksInWorkspace.some((block) => block.type == 's4d_subtract_data_new');
        let registerBlockCount = 0;
        getAllBlocksInWorkspace.some((block) => {
          if (block.type === 'frost_slash_register') registerBlockCount++;
        });
        if (!loginBlock) {
          if (!this.toastLogin) {
            this.toastLogin = true;
            this.$toast.open({
              message: this.$t('warnings.login_block'),
              type: 'warning',
              dismissible: false,
              duration: 1000000000
            });
          }
        } else if (db1 || db3 || db4 || db5 || db6 || db7 || db8 || db9) {
          if (!db2) {
            if (!this.toastDB) {
              this.toastDB = true;
              this.$toast.open({
                message: 'The "Create a new database" block in the "Database" category is required.',
                type: 'error',
                dismissible: false,
                duration: 1000000000
              });
            }
          } else {
            this.toastDB = false;
            this.$toast.clear();
          }
        } else if (registerBlockCount > 1) {
          if (!this.toastRegister) {
            this.toastRegister = true;
            this.$toast.open({
              message: 'You may only use one "Create Slash Commands" block.',
              type: 'error',
              dismissible: false,
              duration: 1000000000
            });
          }
        } else if (this.toastLogin) {
          this.toastLogin = false;
          this.$toast.clear();
        } else if (this.toastRegister) {
          this.toastRegister = false;
          this.$toast.clear();
        } else {
          this.toastDB = false;
          this.$toast.clear();
        }
      }, 100);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.saturate {
  filter: saturate(3);
}
.grayscale {
  filter: grayscale(100%);
}
.contrast {
  filter: contrast(160%);
}
.brightness {
  filter: brightness(0.25);
}
.blur {
  filter: blur(3px);
}
.invert {
  filter: invert(100%);
}
.sepia {
  filter: sepia(100%);
}
.huerotate {
  filter: hue-rotate(180deg);
}
.rss.opacity {
  filter: opacity(50%);
}
.blocklyText,
.blocklyHtmlInput,
.blocklyTreeLabel {
  font-family: sans-serif !important;
}

.blocklyTreeIcon {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}
#blocklyTreeIcon {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}
.blocklyTreeIconClosed {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}
#blocklyTreeIconClosed {
  filter: invert(100%) sepia(0%) saturate(2950%) hue-rotate(348deg) brightness(118%) contrast(96%) !important;
}

textarea.blocklyHtmlInput.blocklyHtmlTextAreaInput {
  padding: 2.925px 4px !important;
}

body {
  font-family: sans-serif;
}
.blocklyDiv {
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  text-align: left;
}
.blocklyToolboxCategory {
  font-family: sans-serif;
  color: rgb(204, 204, 204);
}
.blocklyToolboxCategory .blocklyToolboxContents {
  display: none;
}
.s4d_customblocks_manager_deletor {
  background-color: #0f1011;
  width: 12em;
  height: 38em;
  overflow: auto;
}
.s4d_customblocks_manager_deletor > button {
  background-color: transparent;
  border-width: 0px;
  outline-width: 0px;
  color: white;
}
.s4d_customblocks_manager_deletor > button:hover {
  color: red;
  text-decoration: line-through;
}
</style>
