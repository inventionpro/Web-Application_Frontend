const typeToImg = {
  frost_floppa: 'https://c.tenor.com/VcR3cl_TNQsAAAAM/big-floppa-mad-floppa.gif',
  s4d_fart: 'https://c.tenor.com/UVAk99QaOTsAAAAC/fart-experiment.gif'
};

export default function upgradeXml(xml) {
  // Image embed blocks
  xml.querySelectorAll('block[type="frost_floppa"],block[type="s4d_fart"]')
    .forEach(block=>{
      let orig = block.getAttribute('type');
      block.setAttribute('type', 's4d_embed_create');
      block.innerHTML = `<field name="NAME">embed</field>
<statement name="THEN">
  <block type="s4d_embed_set_image">
    <value name="IMAGE">
      <shadow type="text">
        <field name="TEXT">${typeToImg[orig]}</field>
      </shadow>
    </value>
  </block>
</statement>
<next>
  <block type="s4d_reply">
    <value name="CONTENT">
      <shadow type="text">
        <field name="TEXT">Hey!</field>
      </shadow>
      <block type="s4d_embed_send">
        <field name="NAME">embed</field>
      </block>
    </value>
    ${block.innerHTML}
  </block>
</next>`;
    });
  // Old json db
  let hasOldJSONDB = false;
  xml.querySelectorAll('block[type="s4d_has_data"],block[type="s4d_get_data"],block[type="s4d_get_all_data"],block[type="s4d_set_data"],block[type="s4d_subtract_data"],block[type="s4d_delete_data"],block[type="s4d_delete_all_data"],block[type="s4d_add_data"]')
    .forEach(block=>{
      hasOldJSONDB = true;
      let orig = block.getAttribute('type');
      block.setAttribute('type', orig+'_new');
      block.insertAdjacentHTML('beforeend', `<value name="NAME">
  <block type="jg_text_remake_paragraph_quotes">
    <field name="TEXT">__S4D__Old_JSON_DB</field>
  </block>
</value>`);
    });
  if (hasOldJSONDB) {
    xml.insertAdjacentHTML('beforeend', `<block type="s4d_database_create_new">
  <value name="NAME">
    <shadow type="text">
      <field name="TEXT">__S4D__Old_JSON_DB</field>
    </shadow>
  </value>
  <value name="FILE">
    <shadow type="text">
      <field name="TEXT">database</field>
    </shadow>
  </value>
</block>`);
  }
  return xml;
}