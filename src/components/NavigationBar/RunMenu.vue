<template>
  <BNavItem @click="run">
    <i class="bi bi-play" />
  </BNavItem>
</template>

<script>
import Swal from 'sweetalert2';
import { WebContainer } from '@webcontainer/api';
import req from '../../require.js';

window.botlogs ??= '';

export default {
  name: 'RunMenu',
  methods: {
    async run() {
      if (!window.webcontainer) window.webcontainer = await WebContainer.boot();
      Swal.fire({
        theme: 'auto',
        html: `<h1>Run bot</h1>
<div>
  <button class="btn btn-dark" id="bot-start">Start</button>
  <button class="btn btn-dark" id="bot-stop">Stop</button>
</div>
<div id="output"></div>`,
        didOpen: () => {
          function showLogs() {
            document.getElementById('output').innerText = botlogs;
          }
          showLogs();
          document.getElementById('bot-start').onclick = async () => {
            if (window.botprocess) window.botprocess.kill();
            window.botlogs = '';
            let logwrite = () =>
              new WritableStream({
                write(data) {
                  window.botlogs += data;
                  showLogs();
                }
              });

            let code = this.getWorkspaceCode();
            window.webcontainer.fs.writeFile('index.js', code);

            let deps = [];
            req(deps, [], code);
            deps = Array.from(
              new Set(
                deps
                  .filter((dep) => dep.includes('require'))
                  .map((dep) => Array.from(dep.matchAll(/require\((?:'|")(.+?)(?:'|")\)/g)))
                  .flat(1)
                  .map((dep) => dep[1])
              )
            );
            let installProcess = await window.webcontainer.spawn('npm', ['install', 'discord.js', 'discord-logs', ...deps]);
            installProcess.output.pipeTo(logwrite());
            await installProcess.exit;

            window.botprocess = await window.webcontainer.spawn('node', ['index.js']);
            window.botprocess.output.pipeTo(logwrite());
          };
          document.getElementById('bot-stop').onclick = async () => {
            if (window.botprocess) window.botprocess.kill();
          };
        }
      });
    }
  }
};
</script>
