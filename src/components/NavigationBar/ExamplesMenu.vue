<template>
  <b-nav-item-dropdown id="v-step-0" text="Examples" right>
    <b-dropdown-item @click="userexamples()"><i class="fa-solid fa-user"></i> &#8226; Online Examples</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <p style="text-align: center"><b>Built-in:</b></p>
    <div style="height: 8.75em; overflow: auto">
      <b-dropdown-item @click="load('ping-pong')">Ping-Pong Command</b-dropdown-item>
      <b-dropdown-item @click="load('command-parsing')">Command Handler</b-dropdown-item>
      <b-dropdown-item @click="load('bettercmd')">Prefix Command Handler</b-dropdown-item>
      <b-dropdown-item @click="load('leveling')">Basic Leveling System</b-dropdown-item>
      <b-dropdown-item @click="load('music')">Music System</b-dropdown-item>
      <b-dropdown-item @click="load('image-gen')">Image Generation</b-dropdown-item>
      <b-dropdown-item @click="load('economy')">Economy System</b-dropdown-item>
      <b-dropdown-item @click="load('leaderboard')">Leaderboard from Database</b-dropdown-item>
      <b-dropdown-item @click="load('backup')">Backups</b-dropdown-item>
      <b-dropdown-item @click="load('random')">Random Responses</b-dropdown-item>
      <b-dropdown-item @click="load('cooldown')">Cooldowns</b-dropdown-item>
      <b-dropdown-item @click="load('button')">Buttons & Button rows</b-dropdown-item>
      <b-dropdown-item @click="load('slash')">Slash Commands</b-dropdown-item>
      <b-dropdown-item @click="load('advjsonreq')">Advanced JSON Request</b-dropdown-item>
      <b-dropdown-item @click="load('regex')">RegEx: Finding specific text</b-dropdown-item>
      <b-dropdown-item @click="load('embed example')">Using Embeds Category</b-dropdown-item>
    </div>
  </b-nav-item-dropdown>
</template>

<script>
import Blockly from 'blockly';
import Swal from 'sweetalert2';

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
import localforage from 'localforage';

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

function displaySwalPopupForUserExample(json, lkjgenwhikgu4ewkjn, selectedOption, SERVER, workspace, toast) {
  lkjgenwhikgu4ewkjn.innerHTML = `<h2><i class="fa-solid fa-file-pen"></i> &#8226 <b>${json.example[0].replaceAll('<', '').replaceAll('/', '').replaceAll('\\', '')}</b>${json.example[5] == null || json.example[5] == '' ? '' : ` &#8226 <i class="fa-solid fa-star"></i>`}</h2>
<i class="fa-solid fa-user-shield"></i> <b>${json.example[6].replaceAll('\\', '').replaceAll('<', '').replaceAll('>', '').replaceAll('/', '')}</b>
&#8226
<i class="fa-solid fa-cube"></i> <b><em>${Number(json.example[3])}</em></b>
<p style="color:rgb(45,45,45)"><i class="fa-solid fa-file-lines"></i> &#8226 <i>${json.example[1].replaceAll('<', '').replaceAll('\\', '')}</i></p>
<div id="swal_popup_BlocklyUserExampleViewer"></div>
<div class="swal_popup_BlocklyUserExampleViewer_bottom_left_div">
    <i class="fa-solid fa-id-badge"></i> &#8226 ${selectedOption}<br>
    <div id="userExamplesButton_menu2_shareLinkToExample">
        <i class="fa-solid fa-share-from-square"></i> &#8226 Share a link to this Example
    </div>
</div>
`;
  let previewWorkspace = false;
  Swal.fire({
    theme: 'auto',
    //title: "Load this example?",
    html: lkjgenwhikgu4ewkjn,
    customClass: {
      popup: 'swal-userExamples-preview-popup'
    },
    showCancelButton: true,
    confirmButtonText: 'Load',
    cancelButtonText: 'Cancel'
  })
    .then(async (result) => {
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
      })
        .then((result) => {
          if (result.isDismissed) {
            return;
          } else if (result.isConfirmed) {
            workspace.getAllBlocks().forEach((block) => block.dispose());
          }
          let exampleXml = '';
          fetch(SERVER + `api/getExample?xml=true&id=${selectedOption}`).then((result) =>
            result.text().then((xml) => {
              exampleXml = String(xml);
              Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), workspace);
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
    console.log(json.example);
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
    renderer: 'zelos',
    //theme: theme,
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
  console.log('injected workspace');
  console.log('loading xml for workspace');
  let currentMS = new Date().getTime();
  fetch(SERVER + `api/getExample?xml=true&id=${selectedOption}`).then((result) =>
    result.text().then((xml) => {
      const exampleXml = String(xml);
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), previewWorkspace);
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
  name: 'editmenu',
  computed: {},
  mounted() {
    setTimeout(() => {
      let urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('exampleid')) {
        fetch(`https://s4d-examples.fsh.plus/api/getExample?id=${urlParams.get('exampleid')}`).then(async (result) => {
          result.json().then((json) => {
            const lkjgenwhikgu4ewkjn = document.createElement('div');
            displaySwalPopupForUserExample(json, lkjgenwhikgu4ewkjn, urlParams.get('exampleid'), 'https://s4d-examples.fsh.plus/', this.$store.state.workspace, this.$toast);
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
      })
        .then((result) => {
          if (result.isDismissed) {
            return;
          } else if (result.isConfirmed) {
            this.$store.state.workspace.getAllBlocks().forEach((block) => block.dispose());
          }
          const exampleXml = examples[example];
          Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(exampleXml), this.$store.state.workspace);
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
      const workspace = this.$store.state.workspace;
      let url = 'https://s4d-examples.fsh.plus/';
      if (window.isInS4DDebugMode) {
        url = prompt('Examples server URL to use?', 'https://s4d-examples.fsh.plus/');
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
            const name = encodeURIComponent(document.querySelector('#docName').textContent)
              .replace(/%20/g, ' ')
              .replaceAll('\n', '')
              .replaceAll(/[^a-z 0-9]/gim, '');
            const blockCounts = workspace.getAllBlocks().length;
            Swal.fire({
              theme: 'auto',
              title: 'Upload an example',
              html: `<h5>The content of the example is going to be the blocks you've placed.</h5>
<label for="name">Name of your Example </label>
<input type="text" id="UserExampleName" value="${name == 'Untitled document' ? 'Untitled example' : name}" maxlength="50">
<label for="author">Author of the Example </label>
<input type="text" id="UserExampleAuthor" value="Anonymous" maxlength="20">
<br>
<label style="font-weight: bold;" for="name">Describe your Example...</label>
<textarea id="UserExampleDescription" rows="4" cols="50" maxlength="500"></textarea>
<p>Your example has <b>${blockCounts} block${blockCounts == 1 ? '' : 's'}</b> in it.</p>
${blockCounts <= 5 ? `<p style="color: darkred; font-weight: bold;">Uploading near empty examples is not encouraged.</p>` : ''}`,
              showCancelButton: true,
              confirmButtonText: 'upload',
              cancelButtonText: 'Cancel',
              closeOnClickOutside: false
            })
              .then(async (result2) => {
                if (!result2.isConfirmed) return;
                const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
                fetch(SERVER + 'api/upload', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: String(document.getElementById('UserExampleName').value),
                    desc: String(document.getElementById('UserExampleDescription').value),
                    xml: String(xmlContent),
                    count: workspace.getAllBlocks().length,
                    author: String(document.getElementById('UserExampleAuthor').value),
                    sessionID: await getSessionID()
                  })
                })
                  .then(async (response) => {
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
                  const names = [];
                  let boxes = '';
                  Object.entries(examples).forEach((i) => {
                    names.push([i[1][0], i[1][3], i[1][4], i[1][6], i[1][1], i[1][8], i[1][9], i[1][10], i[1][11], i[1][12]]);
                  });
                  let voteButtonSessionList = {};
                  names.forEach((name) => {
                    voteButtonSessionList[String(name[2])] = { likes: name[8], dislikes: name[9] };
                    boxes += `<label name="pickThisExampleToImportButton" style="width: 48%;">
  <div class="box">
    <input type="radio" id="${name[2]}" name="pickThisExampleToImportButton" class="sr-only-basic">
      <center>
        <h4>${name[0].replaceAll('<', '').replaceAll('>', '').replaceAll('/', '').replaceAll('\\', '')}</h4>
        <p><i class="fas fa-user-shield"></i> Creator: ${name[3]} &#8226 <i class="fas fa-id-badge"></i> ID: ${name[2]}</p>
        <p style="font-style: italic;font-size:small;" title="${name[4]}">${name[4]}</p>
      </center>
    </input>
    <div style="position: absolute;bottom: 0%;left: 0%">
      <button type="button" name="like" class="examplesMenuBox_Likes" id="${name[2]}" title="Like this example" style="background-color: Transparent;border: none;color:gray">
        <i class="fa-solid fa-thumbs-up"> ${name[5]}</i>
      </button>
      <button type="button" name="dislike" class="examplesMenuBox_Dislikes" id="${name[2]}" title="Dislike this example" style="background-color: Transparent;border: none;color:gray">
        <i class="fa-solid fa-thumbs-down"> ${name[6]}</i>
      </button>
      <button type="button" name="downloads" class="examplesMenuBox_Downloads" id="${name[2]}" title="Total number of Imports" style="background-color: Transparent;border: none;color:gray">
        <i class="fa-solid fa-file-import"> ${name[7]}</i>
      </button>
    </div>
    <div style="position: absolute; bottom: 0%; right: 0%; color:gray;">
      <span><i class="fa fa-cube"></i> ${String(name[1])} blocks</span><span style="color:transparent">&#8226</span>
    </div>
  </div>
</label>
<br>`;
                  });
                  responseHTML.innerHTML = `<!-- buttons to search & stuff -->
<div style="margin-bottom: 0.5em;">
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
<!--<div style="float: right;">
  <i title="Sort the examples menu" class="fa-solid fa-arrow-down-wide-short">: </i>
  <select id="swal_dialog_box_sortUserExamples">
    <option value="new">Newest First</option>
    <option value="old">Oldest First</option>
    <option value="liked">Most Liked</option>
    <option value="hated">Most Hated</option>
    <option value="mostImports">Most Imported</option>
    <option value="leastImports">Least Imported</option>
  </select>
</div>-->
<!-- examples area -->
<center>
  <form id="swal_user_examples_dialog_box-form_area" style="width: 100%; display: flex; flex-wrap: wrap; justify-content: center;">
    ${boxes}
  </form>
</center>
<style>
.sr-only-basic {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  width: 1px;
  display: none;
}
</style>`;
                  Swal.fire({
                    theme: 'auto',
                    title: 'Pick an Example',
                    html: responseHTML,
                    customClass: 'swal-wide',
                    showCancelButton: true,
                    cancelButtonText: 'Cancel',
                    confirmButtonText: 'Import Selected Example'
                  })
                    .then(async (result) => {
                      if (!result.isConfirmed) return;
                      const selectedOption = document.querySelector('input[name="pickThisExampleToImportButton"]:checked')?.id;
                      if (selectedOption == null) return;
                      const lkjgenwhikgu4ewkjn = document.createElement('div');
                      fetch(SERVER + `api/getExample?id=${selectedOption}`).then(async (result) => {
                        result.json().then((json) => {
                          displaySwalPopupForUserExample(json, lkjgenwhikgu4ewkjn, selectedOption, SERVER, workspace, this.$toast);
                        });
                      });
                    });
                  console.log('EPIC CLIENT: Running examples scripts for the buttons mm nmmmayay');
                  let elements = document.getElementsByClassName('sr-only-basic');
                  for (let i = 0; i < elements.length; i++) {
                    let current = elements.item(i);
                    current.setAttribute(
                      'onclick',
                      `let parent = this.parentElement
let elements = document.getElementsByClassName("sr-only-basic")
for (let i = 0; i < elements.length; i++) {
    let current = elements.item(i).parentElement
    if (current.getAttribute("style")) current.removeAttribute("style")
}
parent.setAttribute("style", "border-color:#00aaff")`
                    );
                  }
                  let usableClasses = ['examplesMenuBox_Likes', 'examplesMenuBox_Dislikes'];
                  for (let i = 0; i < usableClasses.length; i++) {
                    let cur = usableClasses[i];
                    let elements = document.getElementsByClassName(cur);
                    for (let i = 0; i < elements.length; i++) {
                      let element = elements.item(i);
                      let icon = element.getElementsByTagName('i').item(0);
                      let baseIcon = icon.getAttribute('class');
                      let originalCount = Number(icon.innerText);
                      let likeButton = element.getAttribute('name') == 'like';
                      let sessionID = await localforage.getItem('EXAMPLE_SESSION_ID');
                      if (voteButtonSessionList[String(element.getAttribute('id'))][likeButton ? 'likes' : 'dislikes'].includes(sessionID)) {
                        originalCount -= 1;
                        icon.setAttribute('style', 'color: #00aaff');
                        icon.innerText = ' ' + (originalCount + 1);
                      }
                      element.setAttribute(
                        'onclick',
                        `let icon = document.getElementsByClassName("${cur}").item(${i}).getElementsByTagName("i").item(0)
icon.setAttribute("class", "fa-solid fa-ellipsis")
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        liking: ${element.getAttribute('name') == 'like'},
        id: ${element.getAttribute('id')},
        session: "${sessionID}"
    })
};
fetch("${SERVER + 'api/examples/updateVotes'}", requestOptions)
.then((response) => {
    if (response.status != 200) {
        console.log("EPIC EXAMPLES SERBER: epic fail")
        icon.setAttribute("class", "fa-solid fa-" + (response.status == 429 ? "circle-pause" : "triangle-exclamation"))
        icon.setAttribute("style", "color: #f" + (response.status == 429 ? "cb103" : "00000"))
        return
    }
    response.json().then((json) => {
        console.log(json)
        icon.setAttribute("class", "${baseIcon}")
        icon.removeAttribute("style")
        icon.innerText = " " + ${originalCount}
        if ((json.liked && this.getAttribute("name") == "like") || (json.disliked && this.getAttribute("name") == "dislike")) {
            icon.setAttribute("style", "color: #00aaff")
            icon.innerText = " " + (${originalCount} + 1)
        }
    })
})
.catch((err) => {
    icon.setAttribute("class", "fa-solid fa-triangle-exclamation")
    icon.setAttribute("style", "color: #ff0000")
})
`
                      );
                    }
                  }
                  // let selectMenu = document.getElementById("swal_dialog_box_sortUserExamples")
                  // selectMenu.onchange = function () {
                  //     console.log()
                  // }
                  let searchBox = document.getElementById('swal_dialog_box_searchForUserExamples');
                  let caseSensitive = false;
                  let caseSensitiveButton = document.getElementById('swal_menu_CaseSensitiveUserExampleSearch');
                  caseSensitiveButton.onclick = function () {
                    caseSensitive = !caseSensitive;
                    caseSensitive ? caseSensitiveButton.setAttribute('style', 'background-color: Transparent;border: none;color:#00aaff') : caseSensitiveButton.setAttribute('style', 'background-color: Transparent;border: none;');
                    searchBox.oninput();
                  };
                  let gridSize3 = false;
                  let gridSizeButton = document.getElementById('swal_menu_ChangeBoxSizeUserExamples');
                  gridSizeButton.onclick = function () {
                    gridSize3 = !gridSize3;
                    let icon = gridSizeButton.getElementsByTagName('i').item(0);
                    if (gridSize3) {
                      icon.setAttribute('class', 'fa-solid fa-table-cells');
                    } else {
                      icon.setAttribute('class', 'fa-solid fa-table-cells-large');
                    }
                    let size = 48 - Number(gridSize3) * 18;
                    let labels = document.getElementById('swal_user_examples_dialog_box-form_area').getElementsByTagName('label');
                    for (let i = 0; i < labels.length; i++) {
                      let current = labels.item(i);
                      if (!current.getAttribute('style').includes('display: none')) {
                        current.setAttribute('style', `width: ${size}%;`);
                      }
                    }
                  };
                  let unsearchedHtml = document.getElementById('swal_user_examples_dialog_box-form_area').innerHTML;
                  searchBox.oninput = function () {
                    let area = document.getElementById('swal_user_examples_dialog_box-form_area');
                    area.innerHTML = unsearchedHtml;
                    if (gridSize3) {
                      gridSize3 = false;
                      gridSizeButton.onclick();
                    }
                    let boxes = area.getElementsByTagName('label');
                    let kept = boxes.length;
                    for (let i = 0; i < boxes.length; i++) {
                      let current = boxes.item(i);
                      let name = current.getElementsByClassName('box').item(0).getElementsByTagName('center').item(0).getElementsByTagName('h4').item(0).innerText;
                      let searchingInside = String(name);
                      let searchingWith = String(searchBox.value);
                      if (!caseSensitive) {
                        searchingInside = searchingInside.toLowerCase();
                        searchingWith = searchingWith.toLowerCase();
                      }
                      if (!searchingInside.includes(searchingWith)) {
                        current.setAttribute('style', 'display: none');
                        kept--;
                      }
                    }
                    if (kept <= 0) {
                      area.innerHTML = `<div style="display: grid">
    <br>
    <br>
    <em style="color:gray">No examples were found.</em>
    <br>
    <i class="fa-solid fa-circle-question fa-2xl"></i>
</div>`;
                    }
                  };
                });
              })
              .catch((err) => {
                const responseHTML = document.createElement('div');
                responseHTML.innerHTML = String(err);
                Swal.fire({
                  theme: 'auto',
                  title: 'An unexpected error occurred!',
                  content: responseHTML,
                  icon: 'error'
                });
              });
          };
          document.getElementById('cancel-btn').onclick = () => {
            Swal.close();
          };
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
  margin-top: -0.5em;
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
  position: absolute;
  height: 78%;
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
