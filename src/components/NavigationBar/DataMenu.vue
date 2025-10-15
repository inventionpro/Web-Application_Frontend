<template>
  <b-nav-item-dropdown text="Data" right>
    <b-dropdown-item @click="ClearAutosave">Clear Autosave</b-dropdown-item>
    <b-dropdown-item @click="TokenDB">Token DB</b-dropdown-item>
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
      }).then((result) => {
        if (!result.isConfirmed) return;
        localforage.removeItem('save3');
        localforage.removeItem('autosaveName');
        localforage.removeItem('autosave_customBlocks');
        console.log('Autosave cleared');
      });
    },
    async TokenDB() {
      let keys = await localforage.getItem('tokens');
      Swal.fire({
        theme: 'auto',
        title: 'Token Database',
        html: `This can be used to store your tokens so you don't need to go elsewhere to get them.
<br>
${keys !== null ? '<button id="tdb-load" class="swal2-confirm swal2-styled">Load Token</button>' : ''}
<button id="tdb-save" class="swal2-confirm swal2-styled">Save Token</button>
${keys !== null ? '<button id="tdb-delete" class="swal2-confirm swal2-styled">Delete Token</button>' : ''}
<button id="tdb-cancel" class="swal2-cancel swal2-styled">Cancel</button>`,
        showConfirmButton: false,
        showCancelButton: false,
        didOpen: () => {
          document.getElementById('tdb-cancel').onclick = () => {
            Swal.close();
          };
          Array.from(document.querySelectorAll('.swal2-container button.swal2-confirm')).forEach((btn) => {
            btn.onclick = async () => {
              switch (btn.id.replace('tdb-', '')) {
                case 'load':
                  Swal.fire({
                    theme: 'auto',
                    title: this.$t('token.load2'),
                    html: `${this.$t('token.text4')}<br><br>
<select class="custom-select" id="restore-select">
  ${keys.map((key) => `<option value="${key}"><b>${key.replace('token-', '')}</b></option>`)}
</select>`,
                    showCancelButton: true,
                    cancelButtonText: this.$t('token.cancels'),
                    confirmButtonText: this.$t('token.loadss'),
                    preConfirm: async () => {
                      const select = document.getElementById('restore-select');
                      const token = await localforage.getItem(select.value);
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer);
                          toast.addEventListener('mouseleave', Swal.resumeTimer);
                        }
                      });
                      Toast.fire({
                        theme: 'auto',
                        icon: 'success',
                        title: this.$t('token.successs')
                      });
                      navigator.clipboard.writeText(token);
                    }
                  });
                  break;
                case 'save':
                  Swal.fire({
                    theme: 'auto',
                    title: this.$t('token.text2'),
                    input: 'text',
                    inputAttributes: {
                      autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: this.$t('token.save2'),
                    showLoaderOnConfirm: true,
                    preConfirm: async (file) => {
                      let maybe = await localforage.getItem('token-' + file);
                      if (maybe === null) {
                        return file;
                      } else {
                        Swal.showValidationMessage(this.$t('token.error'));
                      }
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                  }).then((result2) => {
                    if (result2.isConfirmed) {
                      let name = result2.value;
                      Swal.fire({
                        theme: 'auto',
                        title: this.$t('token.text3'),
                        input: 'text',
                        inputAttributes: {
                          autocapitalize: 'off'
                        },
                        showCancelButton: true,
                        confirmButtonText: this.$t('token.save3'),
                        showLoaderOnConfirm: true,
                        preConfirm: (file2) => file2,
                        allowOutsideClick: () => !Swal.isLoading()
                      }).then(async (result) => {
                        if (result.isConfirmed) {
                          let token = result.value;
                          await localforage.setItem(`token-${name}`, token);
                          let tokens = await localforage.getItem('tokens');
                          if (tokens === null) {
                            await localforage.setItem('tokens', [`token-${name}`]);
                          } else {
                            tokens.push(`token-${name}`);
                            await localforage.setItem('tokens', tokens);
                          }
                          const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer);
                              toast.addEventListener('mouseleave', Swal.resumeTimer);
                            }
                          });
                          Toast.fire({
                            theme: 'auto',
                            icon: 'success',
                            title: `${this.$t('token.success')}${name}`
                          });
                        }
                      });
                    }
                  });
                  break;
                case 'delete':
                  Swal.fire({
                    theme: 'auto',
                    title: this.$t('token.deletee.title'),
                    html: `${this.$t('token.deletee.text')}<br><br>
<select class="custom-select" id="restore-select">
  ${keys.map((key) => `<option value="${key}"><b>${key.replace('token-', '')}</b></option>`)}
</select>`,
                    showCancelButton: true,
                    cancelButtonText: this.$t('token.deletee.cancel'),
                    confirmButtonText: this.$t('token.deletee.load'),
                    preConfirm: async () => {
                      const select = document.getElementById('restore-select');
                      await localforage.removeItem(select.value);
                      let tokens = await localforage.getItem('tokens');
                      function arrayRemove(arr, value) {
                        return arr.filter((ele) => ele !== value);
                      }
                      if (arrayRemove(tokens, select.value).length === 0) {
                        await localforage.setItem('tokens', null);
                      } else {
                        await localforage.setItem('tokens', arrayRemove(tokens, select.value));
                      }
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer);
                          toast.addEventListener('mouseleave', Swal.resumeTimer);
                        }
                      });
                      Toast.fire({
                        theme: 'auto',
                        icon: 'success',
                        title: this.$t('token.deletee.success')
                      });
                    }
                  });
                  break;
              }
            };
          });
        }
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
      }).then((result) => {
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
