import Blockly from 'blockly';
import localforage from 'localforage';
import Swal from 'sweetalert2';

const DISABLED_EVENTS = [Blockly.Events.BUBBLE_OPEN, Blockly.Events.BUMP_EVENTS, Blockly.Events.CLICK, Blockly.Events.BLOCK_DRAG, Blockly.Events.FINISHED_LOADING, Blockly.Events.SELECTED, Blockly.Events.THEME_CHANGE, Blockly.Events.TOOLBOX_ITEM_SELECT, Blockly.Events.TRASHCAN_OPEN, Blockly.Events.UI, Blockly.Events.VIEWPORT_CHANGE];

export default async function register(app, t) {
  console.log('started!');

  setTimeout(async () => {
    let workspace = app.config.globalProperties.$store.state.workspace;
    const xml = await localforage.getItem('save3');
    if (xml !== null && xml.length > 61) {
      Swal.fire({
        theme: 'auto',
        icon: 'question',
        title: t('autosave.title2'),
        html: "<span>Did you not save your project before quitting Scratch For Discord?</span><br><span>No problem, you can just click 'Load' to restore your project!</span>",
        showDenyButton: true,
        denyButtonText: t('autosave.cancell'),
        confirmButtonText: t('autosave.confirm'),
        preConfirm: async () => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
          });
          Toast.fire({
            theme: 'auto',
            icon: 'success',
            title: t('autosave.text')
          });
          console.log('loaded a save!');

          workspace.setResizesEnabled(false);
          workspace.clear();

          const cb = await localforage.getItem('autosave_customBlocks');
          if (cb && cb != '[]') {
            await window.fetchCustomBlocks({
              customBlocks: typeof cb === 'object' ? JSON.stringify(cb) : cb
            });
          }
          Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
          workspace.setResizesEnabled(true);

          const saveNickname = await localforage.getItem('autosaveName');
          document.querySelector('#docName').textContent = saveNickname == null || saveNickname == '' ? 'Untitled autosave' : saveNickname;
        }
      });
    }
    workspace.addChangeListener((event) => {
      if (DISABLED_EVENTS.includes(event.type)) return;
      handle(workspace);
    });
  }, 1000);
}

async function handle(workspace) {
  console.log('saved changes...');
  const content = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
  await localforage.setItem('save3', content);
  await localforage.setItem('autosaveName', document.querySelector('#docName').textContent);
  await localforage.setItem('autosave_customBlocks', JSON.stringify(window.saveCustomBlocksOutput));
}
