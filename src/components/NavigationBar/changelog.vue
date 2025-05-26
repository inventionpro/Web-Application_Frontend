<template>
  <b-nav-item @click="changelog">Changelog</b-nav-item>
</template>

<script>
import Swal from 'sweetalert2';

/* eslint-disable */
function convertBlocklyHTMLElementToDisplayableContent(path, width, height) {
  let newPath = path;
  newPath = path.replace(/transform="translate\([0-9\.\-]*,[0-9\.\-]*\)">/im, `transform="translate(0,0)">`);
  let returned = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" width="${width}px" height="${height}px" style="display: inline;position: inherit;fill: white;font: bold 11px Helvetica Neue, Segoe UI, Helvetica, sans-serif">` + newPath;
  returned += '</svg>';
  return returned;
}

export default {
  name: 'Changelog',
  methods: {
    changelog() {
      Swal.fire({
        position: 'center',
        width: '900px',
        html: `<style>
  h2, h3 {
    font-weight: bold;
  }
  .past-changeBTN {
    text-align: center;
    font-weight: bold;
  }
  .past-changes {
    height: 30em;
    overflow: auto;
  }
  details * {
    text-align: left;
  }
  time {
    font-size: 80%;
  }
  .latest-change, .past-changes > div {
    border: solid 2px;
    padding: 1em;
    border-radius: 0.25em;
    margin: 0.5em 0;
  }
  details img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .img-size1 {
    width: 80%;
  }
  .img-size2 {
    width: 45%;
  }
</style>
<h2>Changelog</h2>
<p style="font-weight:bold">Detailed logs are posted in our <a style="color: #5865F2;" href="https://discord.gg/kXyRzypp4e">Discord</a> Server</p>
<div class="latest-change">
  <div>
    <time datetime="25/05/2025">25/05/2025 - Inventionpro</time>
    <h3>Updated s4d to newer technologies</h3>
  </div>
</div>
<details>
  <summary class="past-changesBTN">Click here to view past changes</summary>
  <div class="past-changes">
    <div>
      <time datetime="09/11/2022">09/11/2022 - JeremyGamer13</time>
      <h3>updated the shortcuts menu to look a bit nicer</h3>
      <img src="/changelog/shortcuts.webp" alt="Updated shortcut pop up" class="img-size2"></img>
    </div>
    <div>
      <time datetime="09/11/2022">09/11/2022 - Freslin</time>
      <h3>Update #2 on Important Links Graphics:</h3>
      <p>Added more labelings to enhance the looks and show the purpose.<br>Unofficial column will be removed when v2 arrives</p>
      <img src="/changelog/links.webp" alt="Updated links" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="09/11/2022">09/11/2022 - JeremyGamer13</time>
      <h3>Updated the Examples menu to show User Examples first & renamed it to Online Examples</h3>
      <img src="/changelog/online_examples.webp" alt="Online examples" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="09/10/2022">09/10/2022 - Eruption</time>
      <h3>Final embed update</h3>
      <img src="/changelog/embed.webp" alt="Embeds" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="08/09/2022">08/09/2022 - redman13</time>
      <h3>added new abject stoof</h3>
      <img src="/changelog/object.webp" alt="Object stoof" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="08/09/2022">08/09/2022 - JeremyGamer13</time>
      <h3>A "little experiment" is now on the site: S4D Forums!</h3>
      <img src="/changelog/forums.webp" alt="Forums (that lasted long)" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="21/09/2022">21/09/2022 - AlexCdDg</time>
      <h3>Sticker blocks are here!</h3>
      <img src="/changelog/stickers.webp" alt="Stickers" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="21/08/2022">21/08/2022 - Eruption</time>
      <h3>Late but export to Javascript UI is much cooler now</h3>
      <img src="/changelog/js.webp" alt="JS cooler" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="19/08/2022">19/08/2022 - Eruption</time>
      <h3>Fixed thread blocks</h3>
      <img src="/changelog/fixthread.webp" alt="Fixed threads" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="13/08/2022">13/08/2022 - Eruption</time>
      <h3>User examples & Changelog menu are revamped!</h3>
      <p>Currently in the process of updating popups because some of them looks bad. Will give the website a more consistent feelings in the future.<br>So far the user examples menu and changelogs have been updated.</p>
      <img src="/changelog/revampedonlineexamples.webp" alt="Revamped menus" class="img-size2"></img> 
    </div>
    <div>
      <time datetime="13/08/2022">13/08/2022 - JeremyGamer13</time>
      <h3>Added some website blocks!</h3>  
      <p>They are in the "Websites" category under "Creation".</p>
      <img src="/changelog/websites.webp" alt="Website blocks" class="img-size2"></img>
    </div>
    <div>
      <time datetime="09/08/2022">09/08/2022 - Eruption</time>
      <h3>Thread blocks are revamped with a bunch of new features!</h3>
      <details>
        <summary>Reddit post</summary>
        <p>Check the Reddit post for more information.</p>
        <iframe id="reddit-embed" src="https://www.redditmedia.com/r/s4d/comments/wk4koo/thread_blocks_are_revamped_with_a_bunch_of_new/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" height="631" width="80%" scrolling="no"></iframe>
      </details>
    </div>
    <div>
      <time datetime="01/08/2022">01/08/2022 - Eruption</time>
      <h3>Dootabase and Database have been merged into new and improved database blocks!</h3>    
      <details>
        <summary>You can now</summary>
        <ul>
          <li>Not get confused by what "Dootabase" is (because it's been removed).</li>
          <li>Create multiple .json files for your database.</li>
          <li>Have different database names (variables).</li>
        </ul>
        <img src="/changelog/database.webp" alt="New database blocks" class="img-size2"></img>
      </details>
      <br>
      <p>This update comes with no cost of your old S4D projects getting corrupted!</p>
      <p>By the way, if you are using the new database blocks but don't have <code style="color: #5ba58b;">Create a new database with name () & set file to ().json</code> then this error will pops up!</p>
      <img src="/changelog/databaseerror.webp" alt="Error" class="img-size1"></img>
    </div>
    <div>
      <time datetime="31/07/2022">31/07/2022 - JeremyGamer13</time>
      <h3>New <code style="color: #50a6c9;"> member () is timed out? </code> block!</h3>    
      <img src="/changelog/timeout.webp" alt="Timed out block" class="img-size1">
    </div>
    <div>
      <time datetime="29/07/2022">29/07/2022 - Freslin</time>
      <h3>Jose, Mrredo and AHQ Embeds are removed!</h3> 
      <p><b>The removed embeds will be permanently removed once v2 arrives! So change up your codes.</b></p>
      <p>Also these were the embeds chosen not only because of the poll, but also as they have most of the features and compatibility.</p>
      <p>Here's an image:</p>
      <img src="/changelog/embedsp.webp" alt="Embeds" class="img-size2">
    </div>
    <div>
      <time datetime="13/07/2022">13/07/2022 - Freslin</time>
      <h3>New <code style="color: #4C97FF;">get all members with role ()</code> block!</h3> 
      <img src="/changelog/allmemberswith.webp" alt="All members with role block" class="img-size2">
    </div>
    <div>
      <time datetime="04/07/2022">04/07/2022 - JeremyGamer13</time>
      <h3>User examples!</h3> 
      <p>Do you want to make an example for something complicated? Now you can do it even easier with the new <b>User Uploaded Examples</b> menu!</p>
      <p>Upload examples, find examples, all created by the community! Find this menu by going to <b>Examples > User Uploaded Examples</b>.<br>
      <i>note: the server is a bit slow, so expect delays when you open user example menus</i></p>
      <img src="/changelog/onlinexamples.webp" alt="User examples" class="img-size1">
    </div>
    <div>
      <time datetime="01/07/2022">01/07/2022 - Freslin</time>
      <h3>New channel position blocks!</h3> 
      <img src="/changelog/rolepositions.webp" alt="Channel position blocks" class="img-size1">
    </div>
    <div>
      <time datetime="29/06/2022">29/06/2022 - Freslin</time>
      <h3>New moderation blocks!</h3> 
      <img src="/changelog/moderation.webp" alt="Moderation blocks" class="img-size1">
      <br>
      <h3>Invites category revamp + New blocks!</h3>
      <p>The invites category has been totally revamped with many new blocks!</p>
      <img src="/changelog/invite.webp" alt="Invite blocks" class="img-size2">
    </div>
    <div>
      <time datetime="28/06/2022">28/06/2022 - Freslin</time>
      <h3>Follow a channel!</h3>
      <p>Only for news/announcements channels.</p>
      <img src="/changelog/followchannel.webp" alt="Follow channel block" class="img-size2">
    </div>
    <div>
      <time datetime="28/06/2022">28/06/2022- JeremyGamer13</time>
      <h3>New regex blocks!</h3>
      <p>Go to <a href="https://regex101.com/">https://regex101.com/</a> to make your own regex.<br>Works with <code style="color: #5ba58b">in text () replace () with ()</code>.</p>
      <img src="/changelog/regex.webp" alt="RegEx blocks" class="img-size1">
    </div>
    <div>
      <time datetime="26/06/2022">26/06/2022 - cat soup</time>
      <h3>New <code style="color: #5b67a5;">bot startup time</code> block!</h3>
      <img src="/changelog/startup.webp" alt="bot startup time block" class="img-size2">
    </div>
    <div>
      <time datetime="26/06/2022">26/06/2022 - Freslin</time>
      <h3>New <code style="color: #4C97FF;">random role in server ()</code> block!</h3>
      <img src="/changelog/randomrole.webp" alt="Random role in server block" class="img-size2">
    </div>
    <div>
      <time datetime="24/06/2022">24/06/2022 - JeremyGamer13</time>
      <h3>Updated search category to use the epic new technology!</h3>
      <p>This is a better way to search than to right click on the workspace and search like that.</p>
      <img src="/changelog/search.webp" alt="Search category" class="img-size1">
    </div>
    <div>
      <time datetime="19/06/2022">18/06/2022 - JeremyGamer13</time>
      <h3>Webhook blocks have gotten a bit of an upgrade!</h3>
      <p>On another note, we are inching towards a member categoryless 469...</p>
      <img src="/changelog/webhook.webp" alt="Webhook blocks" class="img-size1">
    </div> 
    <div>
      <time datetime="14/06/2022">14/06/2022 - LimeNade</time>
      <h3>Lots of blocks were merged to find blocks more easier!</h3>
      <img src="/changelog/merged.webp" alt="Merged blocks" class="img-size1">
    </div>
    <div>
      <time datetime="13/06/2022">13/06/2022 - JeremyGamer13</time>
      <h3>Audit log blocks!</h3>
      <img src="/changelog/audit.webp" alt="Audit log blocks" class="img-size2">
    </div>
    <div>
      <time datetime="08/06/2022">08/06/2022 - Retro</time>
      <h3>SQLite database!</h3>
      <img src="/changelog/sqlite.webp" alt="SQL blocks" class="img-size2">
    </div>
    <div>
      <time datetime="08/06/2022">08/06/2022 - JeremyGamer13</time>
      <h3>Added comment blocks!</h3>
      <p>Comment blocks can either float, or be used in events. They are exported to JavaScript too!</p>
      <img src="/changelog/comments.webp" alt="Comment blocks" class="img-size2">
      <br>
      <h3>Collection blocks yayayay!</h3>
      <p>For anyone who doesn't know JavaScript, these are Maps. You can  store data with a label and use that label to get the data.</p>
      <img src="/changelog/collections.webp" alt="Collection blocks" class="img-size2">
    </div>
    <div>
      <time datetime="07/06/2022">07/06/2022 - cat soup</time>
      <h3>AES and SHA256 encryption, "Securing" category!</h3>
      <img src="/changelog/securing.webp" alt="Securing blocks" class="img-size2">
    </div>
    <div> 
      <time datetime="07/06/2022">07/06/2022 - JeremyGamer13</time>
      <h3>Send messages with user & role pings disabled!</h3>
      <p>To disable pings or only ping certain IDs, put a list in the input. To only ping certain IDs, make a list with the role or member IDs you want to mention. If you want to use the default mentioning then don't put an input there.</p>
      <img src="/changelog/noping.webp" alt="No ping blocks" class="img-size1">
    </div>
    <div>
      <time datetime="06/06/2022">06/06/2022 - JeremyGamer13</time>
      <h3>Updated attachement blocks!</h3>
      <p>The old attachment blocks can be found by searching "att" in the search category.
Please let JeremyGamer13 know if these new blocks are causing problems so he can fix them or revert the change.</p>
      <img src="/changelog/att.webp" alt="Attachment blocks" class="img-size1"> 
      <br>
      <h3>Last messages!</h3>
      <p>Get the last messages (in the "Channels" category). The message properties & the <code style="color: #4C97FF;">ID of message ()</code> blocks are in the "Messages" category. The <code style="color: #4C97FF;">ID of message ()</code> block is mainly used for <code style="color: #4C97FF;">last message #()</code>.</p>
      <img src="/changelog/last.webp" alt="Last messages blocks" class="img-size1"> 
    </div>
    <div>
      <time datetime="31/05/2022">31/05/2022 - JeremyGamer13</time>
      <h3>New Roblox blocks!</h3>
      <p>More will be added in the future.</p>
      <img src="/changelog/roblox.webp" alt="Roblox blocks" class="img-size1"> 
    </div>
    <div>
      <time datetime="29/05/2022">29/05/2022 - LimeNade</time>
      <h3>Server settings!</h3>
      <p>Set or get info about the server's settings.</p>
      <img src="/changelog/ss.webp" alt="Server settings blocks" class="img-size1"> 
    </div>
    <div>
      <time datetime="28/05/2022">28/05/2022 - JeremyGamer13</time>
      <h3>Hopefully you like Minecraft, because we have some Minecraft Blocks now!</h3>
      <p>Bedrock blocks are limited until Minecraft allows more server features.</p>
      <img src="/changelog/minecraft.webp" alt="Minecraft blocks" class="img-size1">
      <br>
      <h2>Advanced JSON requests are here!</h2>
      <p>Blocks in the member categories will also be moved out soon, obviously starting with the JSON request blocks.</p>
      <img src="/changelog/areq.webp" alt="Advanced JSON requests blocks" class="img-size1">
    </div>
    <div>
      <time datetime="26/05/2022">26/05/2022 - JeremyGamer13</time>
      <h2>A couple hotkeys have been added!</h2>
      <ul>
        <li><code style="color:gray">Alt + Ctrl</code> to duplicate.</li>
        <li><code style="color:gray">Alt + T</code> to spawn a text block.</li>
        <li><code style="color:gray">Alt + N</code> to spawn a number block.
      </ul>
      <img src="/changelog/hotkeys.webp" alt="Hotkeys" class="img-size2">
      <br>
      <h3>Hmm, I wonder what this button does...</h3>
      <p><i>(Credit to frostzzone & RllyNotFox!)</i></p>
      <img src="/changelog/moon.webp" alt="Button" style="width: 10%;">
    </div>
    <div>
      <time datetime="05/25/2022">05/25/2022 - LimeNade</time>
      <h3>Scheduled events!</h3>
      <p>Added scheduled events! It will be updated soon!</p>
      <img src="/changelog/schedule.webp" alt="Schedule events" class="img-size2">
    </div>
  </div>
</details>`,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!'
      });
    }
  }
};
</script>
