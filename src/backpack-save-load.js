import localforage from 'localforage';

export default async function Load(backpack, workspace) {
  console.log('started backpack!');
  // Load
  const content = await localforage.getItem('backpack3');
  if (content !== null) {
    console.log('loading backpack');
    backpack.setContents(content);
  }
  // Save
  workspace.addChangeListener((event) => {
    if (event.type !== 'backpack_change') return;
    Save(backpack);
  });
  // Save on timer if event doesn't fire
  setInterval(async function () {
    Save(backpack);
  }, 1000);
}

let last;
async function Save(backpack) {
  let contents = backpack.getContents();
  // Make sure that actually something has changed
  if (JSON.stringify(last) !== JSON.stringify(contents)) {
    // [] === [] -> false, JS my beloved
    console.log('saving backpack');
    last = contents;
    localforage.setItem('backpack3', contents);
  }
}
