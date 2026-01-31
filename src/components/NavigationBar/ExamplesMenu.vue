<template>
  <BNavItemDropdown text="Examples" right>
    <BDropdownItem @click="userexamples()"><i class="fa-solid fa-user" /> &#8226; Online Examples</BDropdownItem>
    <BDropdownDivider />
    <p style="text-align: center">
      <b>Built-in:</b>
    </p>
    <div style="height: 8.75em; overflow: auto">
      <BDropdownItem @click="load('ping-pong')">Ping-Pong Command</BDropdownItem>
      <BDropdownItem @click="load('command-parsing')">Command Handler</BDropdownItem>
      <BDropdownItem @click="load('bettercmd')">Prefix Command Handler</BDropdownItem>
      <BDropdownItem @click="load('leveling')">Basic Leveling System</BDropdownItem>
      <BDropdownItem @click="load('music')">Music System</BDropdownItem>
      <BDropdownItem @click="load('image-gen')">Image Generation</BDropdownItem>
      <BDropdownItem @click="load('economy')">Economy System</BDropdownItem>
      <BDropdownItem @click="load('leaderboard')">Leaderboard from Database</BDropdownItem>
      <BDropdownItem @click="load('backup')">Backups</BDropdownItem>
      <BDropdownItem @click="load('random')">Random Responses</BDropdownItem>
      <BDropdownItem @click="load('cooldown')">Cooldowns</BDropdownItem>
      <BDropdownItem @click="load('button')">Buttons & Button rows</BDropdownItem>
      <BDropdownItem @click="load('slash')">Slash Commands</BDropdownItem>
      <BDropdownItem @click="load('advjsonreq')">Advanced JSON Request</BDropdownItem>
      <BDropdownItem @click="load('regex')">RegEx: Finding specific text</BDropdownItem>
      <BDropdownItem @click="load('embed example')">Using Embeds Category</BDropdownItem>
    </div>
  </BNavItemDropdown>
</template>

<script>
import * as Blockly from 'blockly/core';
import Swal from 'sweetalert2';
import localforage from 'localforage';
import theme from '@blockly/theme-dark';

import PingPongExample from '../../examples/ping-pong';
import CommandParsingExample from '../../examples/command-parsing';
import bettercmd from '../../examples/bettercmd';
import LevelingExample from '../../examples/leveling';
import MusicExample from '../../examples/music';
import ImageGen from '../../examples/image_gen';
import Economy from '../../examples/economy';
import backup from '../../examples/backup';
import random from '../../examples/random';
import aki from '../../examples/aki';
import reddit from '../../examples/reddit';
import ticket from '../../examples/ticket';
import button from '../../examples/button';
import cooldown from '../../examples/cooldown';
import slash from '../../examples/slash';
import advjsonreq from '../../examples/advjsonreq.js';
import regex from '../../examples/regex.js';
import leaderboard from '../../examples/leaderboard.js';
import embed from '../../examples/embed example.js';

const examples = {
  'ping-pong': PingPongExample,
  'command-parsing': CommandParsingExample,
  bettercmd: bettercmd,
  leveling: LevelingExample,
  music: MusicExample,
  'image-gen': ImageGen,
  economy: Economy,
  backup: backup,
  random: random,
  aki: aki,
  reddit: reddit,
  ticket: ticket,
  button: button,
  cooldown: cooldown,
  slash: slash,
  advjsonreq: advjsonreq,
  regex: regex,
  leaderboard: leaderboard,
  'embed example': embed
};

function displaySwalPopupForUserExample(json, selectedOption, SERVER, toast) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<h2><i class="fa-solid fa-file-pen"></i> &#8226 <b>${json.example[0].replaceAll('<', '').replaceAll('/', '').replaceAll('\\', '')}</b>${json.example[5] == null || json.example[5] == '' ? '' : ` &#8226 <i class="fa-solid fa-star"title="This example is created by a trusted/verified creator"></i>`}</h2>
<i class="fa-solid fa-user-shield"></i> <b>${json.example[6].replaceAll('\\', '').replaceAll('<', '').replaceAll('>', '').replaceAll('/', '')}</b>
&#8226
<i class="fa-solid fa-cube"></i> <b><em>${Number(json.example[3])}</em></b>
<p class="text-secondary"><i class="fa-solid fa-file-lines"></i> &#8226 <i>${json.example[1].replaceAll('<', '').replaceAll('\\', '')}</i></p>
<div id="swal_popup_BlocklyUserExampleViewer"></div>
<div class="swal_popup_BlocklyUserExampleViewer_bottom_left_div">
  <i class="fa-solid fa-id-badge"></i> &#8226 ${selectedOption}<br>
  <div id="userExamplesButton_menu2_shareLinkToExample">
    <i class="fa-solid fa-share-from-square"></i> &#8226 Share a link to this Example
  </div>
</div>`;
  let previewWorkspace = false;
  Swal.fire({
    theme: 'auto',
    html: wrapper,
    customClass: {
      popup: 'swal-userExamples-preview-popup'
    },
    showCancelButton: true,
    confirmButtonText: 'Load',
    cancelButtonText: 'Cancel'
  }).then(async (result) => {
    console.log('disposing of workspace');
    if (previewWorkspace) previewWorkspace.dispose();
    console.log('disposed of workspace');
    if (!result.isConfirmed) return;
    Swal.fire({
      theme: 'auto',
      title: 'Delete current blocks?',
      text: 'Would you like to remove the current blocks before importing the example?',
      icon: 'warning',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isDismissed) return;
      if (result.isConfirmed) window.blocklyWorkspaceGlobalRef.clear();
      let exampleXml = '';
      fetch(SERVER + `api/getExample?xml=true&id=${selectedOption}`).then((result) =>
        result.text().then((xml) => {
          exampleXml = String(xml);
          Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(exampleXml), window.blocklyWorkspaceGlobalRef);
          setTimeout(() => {
            toast.open({
              message: 'Loaded a custom example!',
              type: 'success',
              dismissible: true,
              duration: 10000
            });
          }, 200);
        })
      );
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedOption
        })
      };
      fetch(`${SERVER}api/examples/updateDownloads`, requestOptions);
    });
  });
  const copyToClipboardButton = document.getElementById('userExamplesButton_menu2_shareLinkToExample');
  copyToClipboardButton.onclick = () => {
    copyToClipboardButton.innerHTML = `<i class="fa-solid fa-paste"></i> &#8226 Copying...`;
    let likesPercentage = Math.round((Number(json.example[8]) / (Number(json.example[8]) + Number(json.example[9]))) * 100);
    navigator.clipboard.writeText(`Check out this User Uploaded Example at https://scratch-for-discord.com/?exampleid=${selectedOption}
> **${json.example[0].replaceAll('<', '').replaceAll('/', '').replaceAll('\\', '')}**
> ${json.example[1].replaceAll('<', '').replaceAll('/', '').replaceAll('\\', '').replaceAll('\n', '\n> ')}
> -----
> 🚹: ${json.example[6].replaceAll('<', '').replaceAll('/', '').replaceAll('\\', '')}
> 🧱: ${Number(json.example[3])} blocks
> 👍: ${likesPercentage ? likesPercentage + '% of people liked this example' : 'No likes or dislikes have been placed on this example'}`);
    copyToClipboardButton.innerHTML = `<i class="fa-solid fa-clipboard-check"></i> &#8226 Copied to clipboard!`;
  };
  const userExamplesPreviewMenu = document.getElementById('swal_popup_BlocklyUserExampleViewer');
  previewWorkspace = Blockly.inject(userExamplesPreviewMenu, {
    readOnly: true,
    grid: {
      spacing: 25,
      length: 3,
      colour: '#ccc'
    },
    renderer: window.renderer ?? 'zelos',
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
    }
  });
  console.log('injected workspace, loading xml');
  let currentMS = new Date().getTime();
  fetch(SERVER + `api/getExample?xml=true&id=${selectedOption}`).then((result) =>
    result.text().then((xml) => {
      const exampleXml = String(xml);
      Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(exampleXml), previewWorkspace);
      console.log('loaded xml for workspace in', new Date().getTime() - currentMS + 'ms');
    })
  );
}

async function getSessionID() {
  let sessionID = await localforage.getItem('EXAMPLE_SESSION_ID');
  if (sessionID == null) {
    const usableChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-', '_', '=', '+', '[', ']', '(', ')'];
    let sesid = '';
    for (let i = 0; i < 55; i++) {
      sesid += usableChars[Math.floor(Math.random() * usableChars.length)];
    }
    await localforage.setItem('EXAMPLE_SESSION_ID', sesid);
    return sesid;
  }
  return sessionID;
}

export default {
  name: 'Editmenu',
  computed: {},
  mounted() {
    setTimeout(() => {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('exampleid')) {
        fetch(`https://s4d-examples.fsh.plus/api/getExample?id=${urlParams.get('exampleid')}`).then(async (result) => {
          result.json().then((json) => {
            displaySwalPopupForUserExample(json, urlParams.get('exampleid'), 'https://s4d-examples.fsh.plus/', this.$toast);
          });
        });
      }
    }, 500);
  },
  methods: {
    load(example) {
      Swal.fire({
        theme: 'auto',
        title: this.$t('examples.confirm.title'),
        text: this.$t('examples.confirm.text'),
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: this.$t('examples.confirm.yes'),
        denyButtonText: this.$t('examples.confirm.no'),
        cancelButtonText: this.$t('examples.confirm.cancel'),
        allowOutsideClick: false,
        customClass: {
          denyButton: 'red-button'
        }
      }).then((result) => {
        if (result.isDismissed) return;
        if (result.isConfirmed) window.blocklyWorkspaceGlobalRef.clear();
        const exampleXml = examples[example];
        Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(exampleXml), window.blocklyWorkspaceGlobalRef);
        setTimeout(() => {
          this.$toast.open({
            message: this.$t('examples.loaded', {
              example
            }),
            type: 'success',
            dismissible: true,
            duration: 10000
          });
        }, 200);
      });
    },
    userexamples() {
      let url = 'https://s4d-examples.fsh.plus/';
      if (window.isInS4DDebugMode) {
        url = prompt('Examples server URL to use?', url);
        if (!url.endsWith('/')) url += '/';
      }
      const SERVER = url;
      Swal.fire({
        theme: 'auto',
        title: 'User Examples',
        html: `<p>What would you like to do here?</p>
<button id="upload-btn" class="swal2-confirm swal2-styled">Upload an Example</button>
<button id="seeall-btn" class="swal2-confirm swal2-styled">View Examples</button>
<button id="cancel-btn" class="swal2-cancel swal2-styled">Cancel</button>`,
        showConfirmButton: false,
        showCancelButton: false,
        didOpen: async () => {
          await getSessionID();
          document.getElementById('upload-btn').onclick = () => {
            Swal.close();
            const name = encodeURIComponent(document.getElementById('docName').textContent)
              .replace(/%20/g, ' ')
              .replaceAll('\n', '')
              .replaceAll(/[^a-z 0-9]/gim, '');
            const blockCounts = window.blocklyWorkspaceGlobalRef.getAllBlocks(false).length;
            Swal.fire({
              theme: 'auto',
              title: 'Upload an example',
              html: `<b>The content of the example is going to be the blocks you've placed.</b>
<br>
<label for="name">Name: </label>
<input type="text" id="UserExampleName" value="${name == 'Untitled document' ? 'Untitled example' : name}" maxlength="50">
<br>
<label for="author">Author: </label>
<input type="text" id="UserExampleAuthor" value="Anonymous" maxlength="20">
<br>
<label style="font-weight:bold" for="name">Describe your Example...</label>
<br>
<textarea id="UserExampleDescription" rows="4" cols="50" maxlength="500"></textarea>
<p>Your example has <b>${blockCounts} block${blockCounts == 1 ? '' : 's'}</b> in it.</p>
${blockCounts <= 5 ? `<p style="color: red; font-weight: bold;">Uploading near empty examples is not encouraged.</p>` : ''}`,
              showCancelButton: true,
              confirmButtonText: 'upload',
              cancelButtonText: 'Cancel',
              allowOutsideClick: false
            }).then(async (result2) => {
              if (!result2.isConfirmed) return;
              const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(window.blocklyWorkspaceGlobalRef));
              fetch(SERVER + 'api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: String(document.getElementById('UserExampleName').value),
                  desc: String(document.getElementById('UserExampleDescription').value),
                  xml: String(xmlContent),
                  count: blockCounts,
                  author: String(document.getElementById('UserExampleAuthor').value),
                  sessionID: await getSessionID()
                })
              }).then(async (response) => {
                console.log('S4D sent a request, the response status code is', response.status);
                if (response.status != 200) {
                  const responseHTML = document.createElement('div');
                  responseHTML.innerHTML = `Failed to load message`;
                  response.json().then((json) => {
                    responseHTML.innerHTML = String(json.error);
                  });
                  Swal.fire({
                    theme: 'auto',
                    title: 'An error occurred uploading the example!',
                    html: responseHTML,
                    icon: 'error'
                  });
                  return;
                }
                Swal.fire({
                  theme: 'auto',
                  title: 'Congrats!',
                  html: `The example was uploaded!`,
                  icon: 'success'
                });
              });
            });
          };
          document.getElementById('seeall-btn').onclick = () => {
            Swal.close();
            fetch(SERVER + 'api/examples')
              .then(async (response) => {
                console.log('S4D sent a request, the response status code is', response.status);
                if (response.status != 200) {
                  Swal.fire({
                    theme: 'auto',
                    title: 'An unexpected error occurred!',
                    icon: 'error'
                  });
                  return;
                }
                const responseHTML = document.createElement('div');
                response.json().then(async (json) => {
                  const examples = JSON.parse(JSON.stringify(json));
                  responseHTML.innerHTML = `${JSON.stringify(json)}`;
                  let examplesData = [];
                  Object.entries(examples).forEach((i) => {
                    examplesData.push({
                      id: i[1][4],
                      name: String(i[1][0]).replaceAll('<', '').replaceAll('>', '').replaceAll('/', '').replaceAll('\\', ''),
                      creator: i[1][6],
                      description: i[1][1],
                      likes: i[1][8],
                      dislikes: i[1][9],
                      likes_users: i[1][11],
                      dislikes_users: i[1][12],
                      downloads: i[1][10],
                      blocks: i[1][3]
                    });
                  });
                  function examplesToHtml(exampleData) {
                    if (exampleData.length < 1) {
                      return `<div style="height:100%;display:flex;gap:1.5em;flex-direction:column;justify-content:center;">
  <i class="fa-solid fa-circle-question fa-2xl"></i>
  <em style="color:gray">No examples were found.</em>
</div>`;
                    }
                    return exampleData
                      .map(
                        (example) => `<label name="pickThisExampleToImportButton" style="width:${(gridSize3 ?? false) ? '33.33' : '50'}%">
  <div class="box">
    <input type="radio" id="${example.id}" name="pickThisExampleToImportButton" class="sr-only-basic">
      <center>
        <h4>${example.name}</h4>
        <p><i class="fas fa-user-shield"></i> Creator: ${example.creator} &#8226 <i class="fas fa-id-badge"></i> ID: ${example.id}</p>
        <p style="font-style:italic;font-size:small;" title="${example.description}">${example.description}</p>
      </center>
    </input>
    <div style="position: absolute;bottom: 0%;left: 0%">
      <button type="button" name="likes" class="examplesMenuBox_Likes" id="${example.id}" title="Like this example" style="background-color: Transparent;border: none;color:gray">
        <i class="fa-solid fa-thumbs-up"> ${example.likes}</i>
      </button>
      <button type="button" name="dislikes" class="examplesMenuBox_Dislikes" id="${example.id}" title="Dislike this example" style="background-color: Transparent;border: none;color:gray">
        <i class="fa-solid fa-thumbs-down"> ${example.dislikes}</i>
      </button>
      <button type="button" name="downloads" class="examplesMenuBox_Downloads" id="${example.id}" title="Total number of Imports" style="background-color: Transparent;border: none;color:gray">
        <i class="fa-solid fa-file-import"> ${example.downloads}</i>
      </button>
    </div>
    <div style="position: absolute; bottom: 0%; right: 0%; color:gray;">
      <span><i class="fa fa-cube"></i> ${example.blocks} blocks</span><span style="color:transparent">&#8226</span>
    </div>
  </div>
</label>`
                      )
                      .join('');
                  }
                  responseHTML.innerHTML = `<div style="margin-bottom: 0.5em;" class="examples-top-bar">
  <i class="fa-solid fa-magnifying-glass"></i>
  <input type="text" size="75" id="swal_dialog_box_searchForUserExamples" placeholder="Search for an Example">
  <button type="button" id="swal_menu_CaseSensitiveUserExampleSearch" title="Case Sensitive Searching" style="background-color: Transparent;border: none;">
    <i class="fa-solid fa-font"></i>
  </button>
  <button type="button" id="swal_menu_FilterUserExampleSearch" title="Filter Search" style="background-color: Transparent;border: none;display: none">
    <i class="fa-solid fa-filter"></i>
  </button>
  <button type="button" id="swal_menu_ChangeBoxSizeUserExamples" title="Change the amount of examples on screen" style="background-color: Transparent;border: none;">
    <i class="fa-solid fa-table-cells-large"></i>
  </button>
  <i title="Sort the examples menu" class="fa-solid fa-arrow-down-wide-short"> </i>
  <select id="swal_dialog_box_sortUserExamples">
    <option value="new">Newest First</option>
    <option value="old" selected>Oldest First</option>
    <option value="liked">Most Liked</option>
    <option value="hated">Most Hated</option>
    <option value="mostDownloads">Most Downloaded</option>
    <option value="leastDownloads">Least Downloaded</option>
    <option value="mostBlocks">Most Blocks</option>
    <option value="leastBlocks">Least Blocks</option>
  </select>
</div>
<div id="swal_menu_SearchFilterOptionsInUserExamples" style="display: none">
  <br>
  <button type="button" id="SearchFilterOptions_name" title="Search by Example name" class="searchButton">
    <i class="fa-solid fa-file-pen fa-xl"></i>
  </button>
  <button type="button" id="SearchFilterOptions_description" title="Search by Example description" class="searchButton">
    <i class="fa-solid fa-file-lines fa-xl"></i>
  </button>
  <button type="button" id="SearchFilterOptions_author" title="Search by Example author" class="searchButton">
    <i class="fa-solid fa-user-shield fa-xl"></i>
  </button>
  <button type="button" id="SearchFilterOptions_id" title="Search by Example ID" class="searchButton">
    <i class="fa-solid fa-id-badge fa-xl"></i>
  </button>
  &#8226
  <button type="button" id="SearchFilterOptions_likes" title="Search by amount of Likes" class="searchButton">
    <i class="fa-solid fa-thumbs-up fa-xl"></i>
  </button>
  <button type="button" id="SearchFilterOptions_dislikes" title="Search by amount of Dislikes" class="searchButton">
    <i class="fa-solid fa-thumbs-down fa-xl"></i>
  </button>
  <button type="button" id="SearchFilterOptions_imports" title="Search by amount of Imports" class="searchButton">
    <i class="fa-solid fa-file-import fa-xl"></i>
  </button>
  <button type="button" id="SearchFilterOptions_blocks" title="Search by amount of Blocks" class="searchButton">
    <i class="fa-solid fa-cube fa-xl"></i>
  </button>
  <i class="fa-solid fa-angle-right"></i>
  <input type="text" size="2" id="SearchFilterOptions_amount_min" title="Minimum amount of selected item">
  <i class="fa-solid fa-minus"></i>
  <input type="text" size="2" id="SearchFilterOptions_amount_max" title="Maximum amount of selected item">
  <br>
  <br>
</div>
<!-- examples area -->
<center>
  <form id="swal_user_examples_dialog_box-form_area" style="width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-content:flex-start;">
    ${examplesToHtml(examplesData)}
  </form>
</center>`;
                  Swal.fire({
                    theme: 'auto',
                    title: 'Pick an Example',
                    html: responseHTML,
                    customClass: 'swal-wide',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                    confirmButtonText: 'Import Selected Example'
                  }).then(async (result) => {
                    if (!result.isConfirmed) return;
                    const selectedOption = document.querySelector('input[name="pickThisExampleToImportButton"]:checked')?.id;
                    if (selectedOption == null) return;
                    fetch(SERVER + `api/getExample?id=${selectedOption}`).then(async (result) => {
                      result.json().then((json) => {
                        displaySwalPopupForUserExample(json, selectedOption, SERVER, this.$toast);
                      });
                    });
                  });
                  function buttons() {
                    // Buttons
                    document.querySelectorAll('.sr-only-basic').forEach((element) => {
                      element.onclick = function () {
                        // Deselect all
                        document.querySelectorAll('div[style] > .sr-only-basic').forEach((elem) => elem.parentElement.removeAttribute('style'));
                        // Select current
                        this.parentElement.setAttribute('style', 'border-color:#00aaff');
                      };
                    });
                    // Likes & Dislikes
                    document.querySelectorAll('.examplesMenuBox_Likes, .examplesMenuBox_Dislikes').forEach(async (element) => {
                      let icon = element.getElementsByTagName('i').item(0);
                      let baseIcon = icon.getAttribute('class');
                      let originalCount = Number(icon.innerText);
                      let sessionID = await getSessionID();
                      if (examplesData.find((elem) => elem.id === element.getAttribute('id'))[element.getAttribute('name') + '_users'].includes(sessionID)) {
                        originalCount -= 1;
                        icon.setAttribute('style', 'color: #00aaff');
                        icon.innerText = ' ' + (originalCount + 1);
                      }
                      element.onclick = function () {
                        icon.setAttribute('class', 'fa-solid fa-ellipsis');
                        fetch(SERVER + 'api/examples/updateVotes', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            liking: element.getAttribute('name') == 'likes',
                            id: element.getAttribute('id'),
                            session: sessionID
                          })
                        })
                          .then((response) => {
                            if (response.status != 200) {
                              console.log('EPIC EXAMPLES SERBER: epic fail');
                              icon.setAttribute('class', 'fa-solid fa-' + (response.status == 429 ? 'circle-pause' : 'triangle-exclamation'));
                              icon.setAttribute('style', 'color: #f' + (response.status == 429 ? 'cb103' : '00000'));
                              return;
                            }
                            return response.json();
                          })
                          .then((json) => {
                            icon.setAttribute('class', baseIcon);
                            icon.removeAttribute('style');
                            icon.innerText = ' ' + originalCount;
                            if ((json.liked && this.getAttribute('name') === 'likes') || (json.disliked && this.getAttribute('name') === 'dislikes')) {
                              icon.setAttribute('style', 'color: #00aaff');
                              icon.innerText = ' ' + (originalCount + 1);
                            }
                            let idx = examplesData.findIndex((elem) => elem.id === element.getAttribute('id'));
                            examplesData[idx].likes_users = examplesData[idx].likes_users.filter((id) => id !== sessionID);
                            examplesData[idx].dislikes_users = examplesData[idx].dislikes_users.filter((id) => id !== sessionID);
                            if (json.liked) examplesData[idx].likes_users.push(sessionID);
                            if (json.disliked) examplesData[idx].dislikes_users.push(sessionID);
                            examplesData[idx].likes = examplesData[idx].likes_users.length;
                            examplesData[idx].dislikes = examplesData[idx].dislikes_users.length;
                          })
                          .catch(() => {
                            icon.setAttribute('class', 'fa-solid fa-triangle-exclamation');
                            icon.setAttribute('style', 'color: #ff0000');
                          });
                      };
                    });
                  }
                  buttons();
                  // Search + filters + sorting
                  let searchBox = document.getElementById('swal_dialog_box_searchForUserExamples');
                  let area = document.getElementById('swal_user_examples_dialog_box-form_area');
                  function search() {
                    let mutation = structuredClone(examplesData);

                    let query = searchBox.value;
                    if (!caseSensitive) query = query.toLowerCase();

                    switch (sorting) {
                      case 'new':
                        mutation.reverse();
                        break;
                      case 'liked':
                        mutation.sort((a, b) => b.likes - b.dislikes - (a.likes - a.dislikes));
                        break;
                      case 'hated':
                        mutation.sort((a, b) => a.likes - a.dislikes - (b.likes - b.dislikes));
                        break;
                      case 'mostDownloads':
                        mutation.sort((a, b) => b.downloads - a.downloads);
                        break;
                      case 'leastDownloads':
                        mutation.sort((a, b) => a.downloads - b.downloads);
                        break;
                      case 'mostBlocks':
                        mutation.sort((a, b) => b.blocks - a.blocks);
                        break;
                      case 'leastBlocks':
                        mutation.sort((a, b) => a.blocks - b.blocks);
                        break;
                    }

                    mutation = mutation.filter((example) => {
                      if (!caseSensitive) example.name = example.name.toLowerCase();
                      if (!caseSensitive) example.description = example.description.toLowerCase();
                      return example.name.includes(query) || example.description.includes(query);
                    });

                    area.innerHTML = examplesToHtml(mutation);
                    buttons();
                  }
                  searchBox.oninput = search;
                  // Sort
                  var sortingButton = document.getElementById('swal_dialog_box_sortUserExamples');
                  var sorting = 'old';
                  sortingButton.onchange = (e) => {
                    sorting = e.target.value;
                    search();
                  };
                  // Case sensitive
                  var caseSensitiveButton = document.getElementById('swal_menu_CaseSensitiveUserExampleSearch');
                  var caseSensitive = false;
                  caseSensitiveButton.onclick = function () {
                    caseSensitive = !caseSensitive;
                    caseSensitive ? caseSensitiveButton.setAttribute('style', 'background-color: Transparent;border: none;color:#00aaff') : caseSensitiveButton.setAttribute('style', 'background-color: Transparent;border: none;');
                    search();
                  };
                  // Grid size
                  var gridSize3 = false;
                  var gridSizeButton = document.getElementById('swal_menu_ChangeBoxSizeUserExamples');
                  gridSizeButton.onclick = function () {
                    gridSize3 = !gridSize3;
                    let icon = gridSizeButton.getElementsByTagName('i').item(0);
                    icon.setAttribute('class', 'fa-solid fa-table-cells' + (gridSize3 ? '' : '-large'));
                    search();
                  };
                });
              })
              .catch((err) => {
                Swal.fire({
                  theme: 'auto',
                  title: 'An unexpected error occurred!',
                  content: String(err),
                  icon: 'error'
                });
              });
          };
          document.getElementById('cancel-btn').onclick = Swal.close;
        }
      });
    }
  }
};
</script>
<style>
.swal-wide {
  width: 900px;
}

.swal-wide form {
  height: 30em;
  overflow: auto;
}

.swal-wide h4 {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.65);
}

.examples-top-bar button {
  color: inherit;
}

.sr-only-basic {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  width: 1px;
  display: none;
}

.box {
  height: 200px;
  border: 2px solid lightgray;
  border-radius: 0.25em;
  margin: 0.25em;
  padding: 0.5em;
  background-color: white;
  position: relative;
}

.box:hover {
  border: 2px solid lightblue;
}
.box:active {
  border: 3px solid lightblue;
  padding: 0.75em;
}

.box p {
  color: gray;
  margin: 0;
}

.box center {
  height: 100%;
  overflow: hidden;
}

input[type='radio']:checked {
  background: lightblue;
}

.searchButton {
  background-color: Transparent;
  border: none;
}

#swal_menu_CaseSensitiveUserExampleSearch:active,
#swal_menu_ChangeBoxSizeUserExamples:active {
  font-size: 120%;
}

#swal_popup_BlocklyUserExampleViewer {
  font-family: sans-serif;
  height: 50dvh;
  width: 97.5%;
  text-align: left;
  overflow: hidden;
}

.swal-modal.swal-userExamples-preview-popup > .swal-footer {
  position: absolute;
  right: 0;
  bottom: 0;
}

.swal-userExamples-preview-popup {
  width: 90%;
  height: 95%;
}

.swal_popup_BlocklyUserExampleViewer_bottom_left_div {
  color: rgb(120, 120, 120);
  position: absolute;
  bottom: 1%;
  left: 1%;
  text-align: left;
}

/*
#userExamplesButton_menu2_shareLinkToExample {
    left: 0%;
    bottom: 0%;
    color: rgb(120, 120, 120);
    background-color: transparent !important;
    outline-width: 0px !important;
    border-width: 0px !important;
    outline: none !important;
    width: 100%;
}
*/
</style>
