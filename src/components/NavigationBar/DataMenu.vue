<template>
  <b-nav-item-dropdown text="Data" right>
    <b-dropdown-item @click="ClearAutosave">Clear Autosave</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item @click="askForFile">Load data</b-dropdown-item>
    <input hidden @change="load" id="load-s4dData-code" type="file" accept=".zip,.data" />
    <b-dropdown-item @click="dld">Download data</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import JSZip from 'jszip';
import localforage from 'localforage';
import Swal from 'sweetalert2';
export default {
  name: 'userDataExport',
  computed: {},
  methods: {
    ClearAutosave() {
      Swal.fire({
        theme: 'auto',
        title: 'Clear autosave',
        text: `Are you sure?`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      })
        .then((result) => {
          if (!result.isConfirmed) return;
          localforage.removeItem('save3');
          localforage.removeItem('autosaveName');
          localforage.removeItem('autosave_customBlocks');
          console.log('Autosave cleared');
        });
    },
    askForFile() {
      document.querySelector('#load-s4dData-code').click();
    },
    dld() {
      Swal.fire({
        theme: 'auto',
        title: 'WARNING!',
        text: 'This contains all your data including sensitive data',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continue',
        cancelButtonText: 'Cancel',
        allowOutsideClick: false
      })
        .then((result) => {
          if (!result.isConfirmed) return;
          const zip = new JSZip();
          localforage.keys().then(async (data) => {
            let out = {};
            for (let i = 0; i < data.length; i++) {
              out[data[i]] = await localforage.getItem(data[i]);
            }
            zip.file('localForage.json', JSON.stringify(out));
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
                a.download = 's4d.data';
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
              });
          });
        });
    },
    load() {
      const file = document.getElementById('load-s4dData-code').files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        JSZip.loadAsync(evt.target.result).then((data) => {
          data
            .file('localForage.json')
            .async('string')
            .then((content) => {
              content = JSON.parse(content);
              const conl = Object.getOwnPropertyNames(content);
              for (let i = 0; i < conl.length; i++) {
                localforage.setItem(conl[i], content[conl[i]], function (err) {
                  if (err) {
                    console.warn(err);
                  }
                });
              }
            });
        });
      };
      if (file) {
        reader.readAsArrayBuffer(file);
        document.getElementById('load-s4dData-code').setAttribute('value', '');
      }
    }
  }
};
</script>
