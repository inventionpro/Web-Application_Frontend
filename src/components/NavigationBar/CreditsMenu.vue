<template>
  <b-nav-item @click="credit">Credit</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from 'sweetalert2';
export default {
  name: 'CreditsMenu',
  methods: {
    credit() {
      Swal.fire({
        theme: 'auto',
        icon: 'info',
        html: `<h1><span>Developers of </span><span style="color:#15a9e8">Scratch For Discord!</span></h1>
<b><p>
  <h2>New:</h2>
  <span style="color:#9670b5">inventionpro</span>
  <br><br>

  <h2>Preview 469:</h2>
  <h3>Developers:</h3>
  <span style="color:#2aa9bd">frostzzone</span>,
  <span style="color:#ad6f39">RetroBTW</span>,
  <span style="color:#73ad39">nekoify</span>,
  <span style="color:#ff7b00">JeremyGamer13</span>,
  <span style="color:#D276F7">LimeNade</span>,
  <span style="color:#e3aa24">AlexCdDg</span>,
  <span style="color:#e88f68">Eruption</span>,
  <span style="color:#429139">jose_trindade</span>,
  <span style="color:#9c2525">MrRedo</span>,
  <span style="color:#eb4634">RedMan13</span>,
  <span style="color:#69b0d6">Freslin</span>
  <h3>Contributors:</h3>
  <span style="color:#26a39d">henpokpok</span>,
  <span style="color:#8B48A3">LaserCat</span>,
  <span style="color:#e83131">AHQ</span>,
  <span style="color:#ff7b00">Parham</span>,
  <span style="color:#9419FF">TropicGalxy</span>,
  <span style="color:#f28a29">ChsyDev</span>,
  <span style="color:#9670b5">inventionpro</span>
  <br><br>

  <h2>Original S4D:</h2>
  <span style="color:#36915a">Androz</span>,
  <span style="color:#568896">snowflake107</span>,
  <span style="color:#8f815b">7coil</span>,
  <span style="color:#6EB7BB">Andromeda</span>
  <h2>Preview 454:</h2>
  <span style="color:#429139">jose_trindade</span>,
  <span style="color:#9c2525">MrRedo</span>
  <h3>Extras:</h3>
  <span style="color:#568896">Noxy, changelog master</span>
</p></b>`,
        showConfirmButton: true
      });
    }
  }
};
</script>
