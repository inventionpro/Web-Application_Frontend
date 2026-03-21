export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="vB#MF/kC-}dCBD3%UO^f">random_coin</variable>
    <variable id="GO[e,r2@whr7g@1i}sw_">coins</variable>
    <variable id="7$AQky9cD-(*o+k.:OM%">coin_answer</variable>
    <variable id="mebi*b=kInGRZ(gBM-6#">give_answer</variable>
  </variables>
  <block type="s4d_login" id="Hr}:5$QyeB[3=O3Kf+Et" x="0" y="0">
    <value name="TOKEN">
      <block type="text" id="I;}h?~968z3,y]gZGPF?">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_database_create_new" id="O7M9SeE|,L!^~l/w(P#9" x="0" y="106">
    <value name="NAME">
      <shadow type="text" id="]p0o73J1V,i4kS8}t;-P">
        <field name="TEXT">economy</field>
      </shadow>
    </value>
    <value name="FILE">
      <shadow type="text" id="iWe;?+3jVR7*ZHUS@X5h">
        <field name="TEXT">economy</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" id="M}f8a6|BXx3+~m{vs0%i" x="0" y="212">
    <statement name="STATEMENTS">
      <block type="controls_if" id="YW8k,u/~d*GulG(jeA4w">
        <value name="IF0">
          <block type="logic_negate" id=")|0U@~d3S^#[xp!Wfb5]">
            <value name="BOOL">
              <block type="s4d_has_data_new" id="H]5.;1Q%vV1+/65bOO|j">
                <value name="KEY">
                  <shadow type="text" id="]*s9yRDQ@%(sfBcpGT(U">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" id="XUOc2|oHCxEBroG8iyKk" inline="true">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="text" id="Xzd9?=KZ{b}+rufH$6fF">
                        <field name="TEXT">coins-</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="s4d_member_id" id="[hMQ{TDoTvHm1~0%[(9e">
                        <value name="MEMBER">
                          <block type="s4d_message_author" id="rYMLqPQG*^6%m2+DUqRR"></block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="NAME">
                  <block type="jg_text_remake_paragraph_quotes" id="yDLkZmR_mH;C%$xJ$M|n">
                    <field name="TEXT">economy</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="s4d_set_data_new" id="mVhoT,Hgy)XUJ3W8oFWs">
            <value name="KEY">
              <shadow type="text" id="CkVBO7TlMA+m,i}iLU;R">
                <field name="TEXT">hello</field>
              </shadow>
              <block type="text_join" id="|HjnIJf6)7[7e[y:q(#J" inline="true">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="text" id="qg+E3QZ]N+J6eabse|o:">
                    <field name="TEXT">coins-</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="s4d_member_id" id="hSzXla}Yc?*MGcv^4go=">
                    <value name="MEMBER">
                      <block type="s4d_message_author" id="Vn_~Z7Xjwfr+Q?.4E$|*"></block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <value name="VALUE">
              <shadow type="text" id="I)?=]~kv*feChEx2$jQV">
                <field name="TEXT">world</field>
              </shadow>
              <block type="math_number" id=",xtoWm#WXvMG1wiQ%]lS">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="NAME">
              <block type="jg_text_remake_paragraph_quotes" id="iBc#%*@Are[,7=NdcKE}">
                <field name="TEXT">economy</field>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="variables_set" id="H(2XnzCNaNR3SW*ueH))">
            <field name="VAR" id="vB#MF/kC-}dCBD3%UO^f">random_coin</field>
            <value name="VALUE">
              <block type="math_random_int" id="9#~pGLgW[bmkQuGm0v,p">
                <value name="FROM">
                  <shadow type="math_number" id="2Q*_LuEnoHU]O0O^F~o=">
                    <field name="NUM">1</field>
                  </shadow>
                </value>
                <value name="TO">
                  <shadow type="math_number" id="Ek61gLi*8/rYW]we]@eY">
                    <field name="NUM">10</field>
                  </shadow>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set" id="*iu[!LAD*OSvd(AJzm7n">
                <field name="VAR" id="GO[e,r2@whr7g@1i}sw_">coins</field>
                <value name="VALUE">
                  <block type="s4d_get_data_new" id="eXTcDeL=~B,N{L63^rNe">
                    <value name="KEY">
                      <shadow type="text" id="%{Gpk3jQdsoWJ#{N9JsE">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" id="qr#i%qX,0$eN?aaPBO4|" inline="true">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="text" id="gL;_v{/WGi0vemW(QW($">
                            <field name="TEXT">coins-</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="s4d_member_id" id="n5{{?0?kbT#SIYJ2).jt">
                            <value name="MEMBER">
                              <block type="s4d_message_author" id="/(fO1$cO!C}w+d}i_es]"></block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="NAME">
                      <block type="jg_text_remake_paragraph_quotes" id="O:F=m|/65O/LDxo;|z6(">
                        <field name="TEXT">economy</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="s4d_add_data_new" id="z9L?^2CeRe_ra4rI!}Q0">
                    <value name="COUNT">
                      <shadow type="math_number" id="tb]a5J7)YlBzYPk-XM|C">
                        <field name="NUM">1</field>
                      </shadow>
                      <block type="variables_get" id="A=1sBl.]MqWOMx!yf=yq">
                        <field name="VAR" id="vB#MF/kC-}dCBD3%UO^f">random_coin</field>
                      </block>
                    </value>
                    <value name="KEY">
                      <shadow type="text" id="$J{kLqi@mDl/2:}P5QKf">
                        <field name="TEXT">points</field>
                      </shadow>
                      <block type="text_join" id="xGI-YWT5SjvoC,)R#L05" inline="true">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="text" id="_GkMkcvq+Y^7VSMFHVq-">
                            <field name="TEXT">coins-</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="s4d_member_id" id="bg)5z{V9zD$NBgrEozK#">
                            <value name="MEMBER">
                              <block type="s4d_message_author" id="BKE2aHH}r@Ia3c(YEUk3"></block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="NAME">
                      <block type="jg_text_remake_paragraph_quotes" id="wm#):-;U6D9JZmlk,4zm">
                        <field name="TEXT">economy</field>
                      </block>
                    </value>
                    <next>
                      <block type="controls_if" id="Z|0^=f_3Eve{=ZQzc$3r">
                        <mutation elseif="1"></mutation>
                        <value name="IF0">
                          <block type="logic_compare" id="!e[0qqK[B%O?w%o_lL=W">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="s4d_message_content" id="rGM;Q$($X_Px[+}TE2EZ"></block>
                            </value>
                            <value name="B">
                              <block type="text" id="rxY{0p$@uVp{]pKHTG=V">
                                <field name="TEXT">$bal</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_embed_create" id="zt!*=Y4?O|]OLna]78?A">
                            <field name="NAME">embed</field>
                            <statement name="THEN">
                              <block type="s4d_embed_set_color" id="LeyfL%0!:+i|+Z@*Qqjm">
                                <value name="COLOUR">
                                  <shadow type="colour_picker" id="/lix7d23TYy7Y,x#gU+B">
                                    <field name="COLOUR">#6666cc</field>
                                  </shadow>
                                  <block type="colour_random" id="pz9Re-+YEXDOEsl.WrD4"></block>
                                </value>
                                <next>
                                  <block type="s4d_embed_set_title" id="E$Cv|mu%OiQ?xtyXm^*j">
                                    <value name="TITLE">
                                      <shadow type="text" id="lv+smRmQ{mI)=+#M[4:3">
                                        <field name="TEXT">ACCOUNT</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_embed_set_thumb" id="jB:Xhcz,4la}KR2~ptB7">
                                        <value name="THUMB">
                                          <shadow type="text" id="/Cse$~h6F,qxme1DFZ/5">
                                            <field name="TEXT">https://image.com</field>
                                          </shadow>
                                          <block type="s4d_member_icon" id="i[WG@Q!Pi+D(%thF]caM">
                                            <value name="MEMBER">
                                              <block type="s4d_message_author" id="^MS[%Ad+4VQotaebW-Fj"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_embed_set_desc" id="mN7-yJU4,#o$wU72+MDl">
                                            <value name="DESC">
                                              <shadow type="text" id="uji!.Yxj=*5;Rm32?$1.">
                                                <field name="TEXT">Some desc here...</field>
                                              </shadow>
                                              <block type="text_join" id="S}X_.-K/I8@jOhIffS:l">
                                                <mutation items="4"></mutation>
                                                <value name="ADD0">
                                                  <block type="s4d_message_author" id="_lNm}Y12;U7@qe:6fmR2"></block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="text" id="UYVY}rbv^55viN.N#yoM">
                                                    <field name="TEXT"> you currently have </field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="variables_get" id="{T#jZka$[gD4e[XXMUHv">
                                                    <field name="VAR" id="GO[e,r2@whr7g@1i}sw_">coins</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="text" id=".4z_8-p:|C/d8*:nK|EX">
                                                    <field name="TEXT"> coins in your account.</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="s4d_reply" id="QYO6fp|P)/=|HDxojK^5">
                                <value name="CONTENT">
                                  <shadow type="text" id="yEMd?812RQyR@4S2#TGI">
                                    <field name="TEXT">Hey!</field>
                                  </shadow>
                                  <block type="s4d_embed_send" id="s0W=8W?fX4AEObf1Qm7a">
                                    <field name="NAME">embed</field>
                                  </block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <value name="IF1">
                          <block type="s4d_starts_with" id="VD{t5sB-:b6U}sPS_!x4" inline="true">
                            <value name="STRING">
                              <shadow type="text" id="qgFy4me{q-VBzg9MqcxY">
                                <field name="TEXT">abc</field>
                              </shadow>
                              <block type="s4d_message_content" id="O3o4PQQUY2OfoaY}8Y!O"></block>
                            </value>
                            <value name="SUBSTRING">
                              <shadow type="text" id="aP;)3t%VHw!?)B4N8xil">
                                <field name="TEXT">$bal</field>
                              </shadow>
                            </value>
                          </block>
                        </value>
                        <statement name="DO1">
                          <block type="s4d_try_and_catch" id="5}A@BqkM|l23A1oW~Sp1">
                            <statement name="try">
                              <block type="controls_if" id="Nel1H+C+F59AwK@6nv[x">
                                <value name="IF0">
                                  <block type="logic_negate" id="H6hES*~$gQ+GZcNx_!|g">
                                    <value name="BOOL">
                                      <block type="s4d_has_data_new" id="r0:;zHB!1AgjegFze@mE">
                                        <value name="KEY">
                                          <shadow type="text" id="5n@6kEEyz|%a/7sT_A4=">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_join" id="oL9|$hXt6x9FfuuLXsT8" inline="true">
                                            <mutation items="2"></mutation>
                                            <value name="ADD0">
                                              <block type="text" id="lQquu_2A0hOl1;gZF]5T">
                                                <field name="TEXT">coins-</field>
                                              </block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="s4d_member_id" id=";/BiC)p(LUmKFZcxP.@*">
                                                <value name="MEMBER">
                                                  <block type="s4d_mentioned_member" id=".iXNU7VSP4V:n::5)c~b"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <block type="jg_text_remake_paragraph_quotes" id="GK4E-0bf)L1j,1=/OL@Y">
                                            <field name="TEXT">economy</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_set_data_new" id="94M.l(|=yUE$yuAKmZ)B">
                                    <value name="KEY">
                                      <shadow type="text" id="I-]zYJ0LjX_:d[BDneSE">
                                        <field name="TEXT">hello</field>
                                      </shadow>
                                      <block type="text_join" id="Ti5eT0vx[lmr%!e!0l2D" inline="true">
                                        <mutation items="2"></mutation>
                                        <value name="ADD0">
                                          <block type="text" id="$1,cu1GU#]A67*^KH~?,">
                                            <field name="TEXT">coins-</field>
                                          </block>
                                        </value>
                                        <value name="ADD1">
                                          <block type="s4d_member_id" id="@=*?AxVd.!!=NTVzbgD|">
                                            <value name="MEMBER">
                                              <block type="s4d_mentioned_member" id="1SQTvy%A%46r*ApE1.);"></block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="VALUE">
                                      <shadow type="text" id="4LhrKPF@Kq{wx@AuraOA">
                                        <field name="TEXT">world</field>
                                      </shadow>
                                      <block type="math_number" id="w^dv^3!A2EY(G@Q?~i@b">
                                        <field name="NUM">0</field>
                                      </block>
                                    </value>
                                    <value name="NAME">
                                      <block type="jg_text_remake_paragraph_quotes" id="Hr@14$d:b#w-mnhkL7Wt">
                                        <field name="TEXT">economy</field>
                                      </block>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="s4d_embed_create" id="u1I20r{]X6y(#mrobdQL">
                                    <field name="NAME">embed</field>
                                    <statement name="THEN">
                                      <block type="s4d_embed_set_color" id="mJ]9tD=PC,4n)fA.gRrP">
                                        <value name="COLOUR">
                                          <shadow type="colour_picker" id="/lix7d23TYy7Y,x#gU+B">
                                            <field name="COLOUR">#6666cc</field>
                                          </shadow>
                                          <block type="colour_random" id="m|PdJT21,%lM4r[VL,7U"></block>
                                        </value>
                                        <next>
                                          <block type="s4d_embed_set_title" id="eNE;Fz4_W(5bZW3^YH%/">
                                            <value name="TITLE">
                                              <shadow type="text" id="V6kJKY:tTlY-y1t;@bl?">
                                                <field name="TEXT">ACCOUNT</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_embed_set_thumb" id="$kE.9+M]{.4*J:!TeQ)H">
                                                <value name="THUMB">
                                                  <shadow type="text" id="/Cse$~h6F,qxme1DFZ/5">
                                                    <field name="TEXT">https://image.com</field>
                                                  </shadow>
                                                  <block type="s4d_member_icon" id="J2g0_d5v0%mxY)l*=lD{">
                                                    <value name="MEMBER">
                                                      <block type="s4d_message_author" id=":?qzkrq8PE5{s?TrC#1?"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_embed_set_desc" id="3=E]/Kz5rijG9q]KP5J2">
                                                    <value name="DESC">
                                                      <shadow type="text" id="uji!.Yxj=*5;Rm32?$1.">
                                                        <field name="TEXT">Some desc here...</field>
                                                      </shadow>
                                                      <block type="text_join" id="FxTI^dk[U8%5:RJ-%K;*">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="s4d_mentioned_member" id="b(MjG(:2,o2vI4nb=Gj,"></block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="text" id="8^AOVS}?[Uh$,$sCiTs^">
                                                            <field name="TEXT"> currently has </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_get_data_new" id="D7rb;GDGY[)LWc4{mqRl" inline="true">
                                                            <value name="KEY">
                                                              <shadow type="text" id="2MDe1tq(@9rIAiBZTHNN">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" id="A|w/(5y-WA]z.+:!5r)e" inline="true">
                                                                <mutation items="2"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="ZL.w8d@#Pop)zjbu2e])">
                                                                    <field name="TEXT">coins-</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_member_id" id="JJq,ad5~hwe2AOE]]1Q/">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_mentioned_member" id="yDGWh{3}i$gd#0_v@Hy7"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="NAME">
                                                              <block type="jg_text_remake_paragraph_quotes" id="C(QfiP1R+i]%+e#!7ZAz">
                                                                <field name="TEXT">economy</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text" id="Z}aKe$EWTJM2/.2Z.~*s">
                                                            <field name="TEXT"> coins in their account.</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="s4d_reply" id="I8N=TvN%mB?hj{MxS9Cj">
                                        <value name="CONTENT">
                                          <shadow type="text" id="yEMd?812RQyR@4S2#TGI">
                                            <field name="TEXT">Hey!</field>
                                          </shadow>
                                          <block type="s4d_embed_send" id="dya9y;VR.tqfui|m:%t}">
                                            <field name="NAME">embed</field>
                                          </block>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <statement name="catch">
                              <block type="s4d_reply" id="6aS|Ak8KUfw22t#SczJa">
                                <value name="CONTENT">
                                  <shadow type="text" id="~}5Fl/O/DS)gMYVm$.?2">
                                    <field name="TEXT">ping a valid member</field>
                                  </shadow>
                                </value>
                              </block>
                            </statement>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if" id=";q?NZB28s;L7*%b7aN@{">
                            <mutation elseif="1"></mutation>
                            <value name="IF0">
                              <block type="s4d_starts_with" id="fN=]EYDp:S$oP.,Ni*-~" inline="true">
                                <value name="STRING">
                                  <shadow type="text" id="Nq5%iLrk%_c|Zd$-u,Uy">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="s4d_message_content" id="VEUxeU-4rO#En^Em/N#7"></block>
                                </value>
                                <value name="SUBSTRING">
                                  <shadow type="text" id="Y%L;Za,VZGWtA=]s^E/+">
                                    <field name="TEXT">$editcoins</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="controls_if" id="Y;H|hbU(qGG@x0~Zi@ZG">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission" id="1o[kXw2^lvKf13a:vsX{">
                                    <field name="PERMISSION">MANAGE_GUILD</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_author" id="*|qSUzo4n}^n7{@|KlaK"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_try_and_catch" id="jnp^ZPB/;4LZ:__Aji()">
                                    <statement name="try">
                                      <block type="controls_if" id="4N@5ZbmFPbR%ekEVAH)D">
                                        <value name="IF0">
                                          <block type="logic_negate" id="08r7){qgKBH%gO4T]x^r">
                                            <value name="BOOL">
                                              <block type="s4d_has_data_new" id="N{62r}+zMSO)la}b5r?/">
                                                <value name="KEY">
                                                  <shadow type="text" id="0qwur=8dwkf^:5@3eUGC">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_join" id="tq~-X,62|It0Yp!gCTgM" inline="true">
                                                    <mutation items="2"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text" id="PVQBw2M4uesT){9]fK6;">
                                                        <field name="TEXT">coins-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_member_id" id="NDszXyzFKme;(m4}Kdzw">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="%w0dHos/Yay)5Ar^)~I$"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes" id="2qm#[Qk/H2?9$TmL!1$t">
                                                    <field name="TEXT">economy</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_set_data_new" id="F-,|L:.,q|:;0R{iMd3!">
                                            <value name="KEY">
                                              <shadow type="text" id="Qq67sD$oPGb|VI^TJSZG">
                                                <field name="TEXT">hello</field>
                                              </shadow>
                                              <block type="text_join" id="Jz=)7/Pa|+J~vuFLxEje" inline="true">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0">
                                                  <block type="text" id="YZe4i8E+.2#{7yMqeCx^">
                                                    <field name="TEXT">coins-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_member_id" id="eF+(Xs8cc3$2PL7Oey_@">
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="7zE!5,Rei[AS,fvSGfev"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="VALUE">
                                              <shadow type="text" id="1qyXQvW0BH*@wpY#[1gN">
                                                <field name="TEXT">world</field>
                                              </shadow>
                                              <block type="math_number" id="/enOje3+wa-PqueD;b3[">
                                                <field name="NUM">0</field>
                                              </block>
                                            </value>
                                            <value name="NAME">
                                              <block type="jg_text_remake_paragraph_quotes" id="M$U{me/UVDiO$zlz+g)~">
                                                <field name="TEXT">economy</field>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="s4d_send_wait_reply" id="tZHeA~Xa,;/Db]Z*l-F8">
                                            <value name="CONTENT">
                                              <shadow type="text" id="]s-f%-6Y@48;IRW_#d9/">
                                                <field name="TEXT">how many coins do you want to add</field>
                                              </shadow>
                                            </value>
                                            <value name="CHANNEL">
                                              <block type="s4d_message_channel" id="_~KA(zk@/P{p6hu%!Dcy"></block>
                                            </value>
                                            <value name="MEMBER">
                                              <block type="s4d_message_member" id="aYjPF6P{4iae.o$nILk!"></block>
                                            </value>
                                            <value name="TIME">
                                              <shadow type="math_number" id="oh6yn:=80wX}Jm$HHbxf">
                                                <field name="NUM">10</field>
                                              </shadow>
                                            </value>
                                            <statement name="THEN">
                                              <block type="variables_set" id="O$#@zeC8taK[n[Tm^{(:">
                                                <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                <value name="VALUE">
                                                  <block type="s4d_send_wait_reply_value" id="L4~Zqt4rXHm@ce%wJmO@"></block>
                                                </value>
                                                <next>
                                                  <block type="controls_if" id="1L,nXj),-Lx6%xVFMp[N">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_operation" id="m_AKQSF]lnZ/NLaXeTx{">
                                                        <field name="OP">AND</field>
                                                        <value name="A">
                                                          <block type="logic_operation" id="e2rA#S2?nf@oPw|]QnZ3">
                                                            <field name="OP">OR</field>
                                                            <value name="A">
                                                              <block type="math_number_property" id="{K)QC]?3r5nWzJLevd@E">
                                                                <mutation divisor_input="false"></mutation>
                                                                <field name="PROPERTY">EVEN</field>
                                                                <value name="NUMBER_TO_CHECK">
                                                                  <shadow type="math_number" id="M9s?3w.!#iG(IPm]!qY9">
                                                                    <field name="NUM">0</field>
                                                                  </shadow>
                                                                  <block type="variables_get" id="{R}@eU^I67]:UU6M%6sD">
                                                                    <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="math_number_property" id="S5hMMt?ETK])0zkXb?Zo">
                                                                <mutation divisor_input="false"></mutation>
                                                                <field name="PROPERTY">ODD</field>
                                                                <value name="NUMBER_TO_CHECK">
                                                                  <shadow type="math_number" id="RelZNjZS3r_C89oAjzz8">
                                                                    <field name="NUM">0</field>
                                                                  </shadow>
                                                                  <block type="variables_get" id="mDspw4M|89gqj8sh2zx%">
                                                                    <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_operation" id="j2v9/nH9:m;o}~A_4Gph">
                                                            <field name="OP">AND</field>
                                                            <value name="A">
                                                              <block type="logic_compare" id="U+IOG^b+WEe(h^qC3V|S">
                                                                <field name="OP">GTE</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="/#t3okER}qiP#ju3_1ye">
                                                                    <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number" id="D-Ym^Tc:(,J-Yb.J+Uo}">
                                                                    <field name="NUM">-1000000</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="logic_compare" id="TW#]FhQ},;ipe7c+UR;L">
                                                                <field name="OP">LTE</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="bIYZ|tV;4FW$}!.H;DbR">
                                                                    <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number" id="QjagWE[?FT@z0xk~{W,j">
                                                                    <field name="NUM">1000000</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_add_data_new" id="-MT?y1BAesIMw@hr*n:b">
                                                        <value name="COUNT">
                                                          <shadow type="math_number" id=")RHY{0o6qj(F.Mw]NiE:">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                          <block type="variables_get" id="ZGnE8rqZyjFJ%7A48Dv!">
                                                            <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                          </block>
                                                        </value>
                                                        <value name="KEY">
                                                          <shadow type="text" id="27Nzxc,,yz6C/2~32C;*">
                                                            <field name="TEXT">points</field>
                                                          </shadow>
                                                          <block type="text_join" id="[Uiv_L8YA);P4pV;GlG+" inline="true">
                                                            <mutation items="2"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text" id="[h,6.m+}-rsC}hh1X-[Q">
                                                                <field name="TEXT">coins-</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_member_id" id="jYuDDjKgvSK+ED?a0RJD">
                                                                <value name="MEMBER">
                                                                  <block type="s4d_mentioned_member" id="ex5RB*25r3,,{lvsM2)T"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="NAME">
                                                          <block type="jg_text_remake_paragraph_quotes" id="hoOl()+4:)y2]=Z,ssxU">
                                                            <field name="TEXT">economy</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_reply" id="-[pK@Qe_KH?X6[!+$7vK">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="w4znNat?3QzAq,x7b]?r">
                                                                <field name="TEXT">enter a valid number</field>
                                                              </shadow>
                                                              <block type="text_join" id="(T8k*_T./8B46,0m.MW(" inline="true">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="|C|N#!0c8ur}4]4L=}Au">
                                                                    <field name="TEXT">added </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="variables_get" id="~A/Eljb~kNXI.EBhX.([">
                                                                    <field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="|#{mhe_ko:ZGslm.m|fG">
                                                                    <field name="TEXT"> coins to the member</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="s4d_reply" id="!g|gc^d+n0fNeC1yV^Bk">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="]X_jzo0#@FZt#hZTaiG}">
                                                            <field name="TEXT">enter a valid number between -1000000 and 1000000 and also redo the edit coins process to edit coins of a member</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <statement name="catch">
                                      <block type="s4d_reply" id="%RX2*N+mOJg.Uv{s#EWe">
                                        <value name="CONTENT">
                                          <shadow type="text" id="CX_#4u}]#I/;ACZ_96,u">
                                            <field name="TEXT">ping a valid memeber</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply" id="d]FmQ?2V?($yA9z!ouCM">
                                    <value name="CONTENT">
                                      <shadow type="text" id="eU+etO=e|o^jD$]LE{Y[">
                                        <field name="TEXT">you need the manage server permission to use this command</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF1">
                              <block type="s4d_starts_with" id="Ktp_4vgewe:!pen]B^9-" inline="true">
                                <value name="STRING">
                                  <shadow type="text" id="AsiY*~SONbRnz*%JG)lZ">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="s4d_message_content" id="T:[YQFjeBjFe)%l{3but"></block>
                                </value>
                                <value name="SUBSTRING">
                                  <shadow type="text" id="5VvM%KkgMgHbRj+6TpLo">
                                    <field name="TEXT">$reset</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <statement name="DO1">
                              <block type="controls_if" id="4W?[.s_OkMP23WaWzaHR">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission" id="RP~4RkLO*ajj:^9);==z">
                                    <field name="PERMISSION">MANAGE_GUILD</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_author" id="7qYcocR|*U9bkQg7/%L6"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_try_and_catch" id="Mk@$@Hu34]*+^Zz^*Z,O">
                                    <statement name="try">
                                      <block type="s4d_set_data_new" id="kn)Tek[bMuU.gEu3KJF@">
                                        <value name="KEY">
                                          <shadow type="text" id="%uRU}q7_%i*ekf,{e@;T">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_join" id="3a@tp;)aOoF$Gz1e9EeL" inline="true">
                                            <mutation items="2"></mutation>
                                            <value name="ADD0">
                                              <block type="text" id="HpXVbx5kegnWzP;U;R0z">
                                                <field name="TEXT">coins-</field>
                                              </block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="s4d_member_id" id="gs]T?q:Lk{.f/[Y6|9A0">
                                                <value name="MEMBER">
                                                  <block type="s4d_mentioned_member" id="G:}W)$0VidkFuPJ*JSj7"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="VALUE">
                                          <shadow type="text" id="o9DBp0J2EZE2k#zHtPGz">
                                            <field name="TEXT">world</field>
                                          </shadow>
                                          <block type="math_number" id="=s2@p/fibe{6I6M@ijQS">
                                            <field name="NUM">0</field>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <block type="jg_text_remake_paragraph_quotes" id="GGH-k*?}mc:lxtl?$QW1">
                                            <field name="TEXT">economy</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_embed_create" id="RV$ba_M*Mm+9[B(D6zpi">
                                            <field name="NAME">embed</field>
                                            <statement name="THEN">
                                              <block type="s4d_embed_set_color" id="_|OO;5QKX6]}kLb38yeo">
                                                <value name="COLOUR">
                                                  <shadow type="colour_picker" id="/lix7d23TYy7Y,x#gU+B">
                                                    <field name="COLOUR">#6666cc</field>
                                                  </shadow>
                                                  <block type="colour_random" id="*8]Qr!HVRA=%R43KH!c0"></block>
                                                </value>
                                                <next>
                                                  <block type="s4d_embed_set_desc" id="-{6]Vlp?)?m6wKJ/rr=(">
                                                    <value name="DESC">
                                                      <shadow type="text" id="uji!.Yxj=*5;Rm32?$1.">
                                                        <field name="TEXT">Some desc here...</field>
                                                      </shadow>
                                                      <block type="text_join" id="=n6r1x79{3z+yfgM75QD">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="s4d_message_author" id="NudE-Q4SM+$;x}M+g~a#"></block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="text" id="@c*ixS([VCFQS~GL]5;e">
                                                            <field name="TEXT"> reset the coin count for </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_mentioned_member" id="TeFhlb!!V:LSHaxlKIl@"></block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text" id="l,eg)O{g?U0^u2f#5/-Q">
                                                            <field name="TEXT"> to 0</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="s4d_reply" id="ZO]B:mXU-SXzx!fL:j9r">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="yEMd?812RQyR@4S2#TGI">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="s4d_embed_send" id="Lg4dJmSZF^BzChwoXNNr">
                                                    <field name="NAME">embed</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <statement name="catch">
                                      <block type="s4d_reply" id="1^{0dS7KlpgMWB;eu}sV">
                                        <value name="CONTENT">
                                          <shadow type="text" id="9mNJ!r}q6r_o)TlVZEoC">
                                            <field name="TEXT">ping a valid memeber</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply" id="=wu#R0ut*Cx!O9D*K=t{">
                                    <value name="CONTENT">
                                      <shadow type="text" id="kSFN8*cV4E=[i*mk[h54">
                                        <field name="TEXT">you need the manage server permission to use this command</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if" id="I.sZ+EM.]~H=yOXN,!J8">
                                <value name="IF0">
                                  <block type="s4d_starts_with" id="IHyaJjcEA-Pa:/l4Lf:F" inline="true">
                                    <value name="STRING">
                                      <shadow type="text" id="N~]pIbsML04e=Y-e3PUN">
                                        <field name="TEXT">abc</field>
                                      </shadow>
                                      <block type="s4d_message_content" id="mvtUz{W5?v6Ne3:HzQ}f"></block>
                                    </value>
                                    <value name="SUBSTRING">
                                      <shadow type="text" id="V?v@pAYpP#[4b0EKu%[9">
                                        <field name="TEXT">$give</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_try_and_catch" id="BwBRQ,nx]VMe@$n6!yvy">
                                    <statement name="try">
                                      <block type="controls_if" id="Yh_3a|0u{Q:kvrjVA6pf">
                                        <value name="IF0">
                                          <block type="logic_negate" id="urz9T.}U8Hvv_X25LWoq">
                                            <value name="BOOL">
                                              <block type="s4d_has_data_new" id="W%Z4l4OjXJ0gUOEUJ3x{">
                                                <value name="KEY">
                                                  <shadow type="text" id="r(AH:zWlEpbg?pQz#YF,">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_join" id="*8),~b71W~!?~ccb$9?p" inline="true">
                                                    <mutation items="2"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text" id="s,33lWEuhP$lN!GSa9dg">
                                                        <field name="TEXT">coins-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_member_id" id="mhIfLwTI$P/(l3pA%6RT">
                                                        <value name="MEMBER">
                                                          <block type="s4d_mentioned_member" id="wP@wgv.KaV0(*M#$$=N^"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes" id="S3cg,wvdtu@^(V.efZ!-">
                                                    <field name="TEXT">economy</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_set_data_new" id="=kVGeJqV:B?]p2hfd.m{">
                                            <value name="KEY">
                                              <shadow type="text" id="LMEoud~j-ZgACS:I{ztz">
                                                <field name="TEXT">hello</field>
                                              </shadow>
                                              <block type="text_join" id="X_9w9V*Y(|NbOQV_VU,G" inline="true">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0">
                                                  <block type="text" id="}x:IAQ;yGRVKTONfgS1$">
                                                    <field name="TEXT">coins-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_member_id" id="xF%03)#k#%FE{!1LW5?2">
                                                    <value name="MEMBER">
                                                      <block type="s4d_mentioned_member" id="Py9bR!g=R}B21Z*Az??~"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="VALUE">
                                              <shadow type="text" id=")A|6kCv/o%P(Y^po{eIU">
                                                <field name="TEXT">world</field>
                                              </shadow>
                                              <block type="math_number" id="N|pHg?me+Jecd7#}TCuR">
                                                <field name="NUM">0</field>
                                              </block>
                                            </value>
                                            <value name="NAME">
                                              <block type="jg_text_remake_paragraph_quotes" id="FZU572F:kaqzTJTze#Io">
                                                <field name="TEXT">economy</field>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="s4d_send_wait_reply" id="W%A*!-BuzQErSrL?eB%%">
                                            <value name="CONTENT">
                                              <shadow type="text" id="sk0SR$uh+R1;2+3z!X*V">
                                                <field name="TEXT">how many coins do you want to give to the member</field>
                                              </shadow>
                                            </value>
                                            <value name="CHANNEL">
                                              <block type="s4d_message_channel" id="j!B3VlDzx0[$n.[9a;lt"></block>
                                            </value>
                                            <value name="MEMBER">
                                              <block type="s4d_message_member" id="py{*o?!V:.rykWgtGc!L"></block>
                                            </value>
                                            <value name="TIME">
                                              <shadow type="math_number" id="3nevZOJ^V^G#b_MwLO{a">
                                                <field name="NUM">10</field>
                                              </shadow>
                                            </value>
                                            <statement name="THEN">
                                              <block type="variables_set" id="r%=;^(bqr?Vwf2$Ajfrb">
                                                <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                <value name="VALUE">
                                                  <block type="s4d_send_wait_reply_value" id="-b}ZGEci7/T7^X0WEerJ"></block>
                                                </value>
                                                <next>
                                                  <block type="controls_if" id="x!b|9,u=)wOeT(;|qZ/G">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_operation" id="K;7]_A|_Bp[/?]VK#:}?">
                                                        <field name="OP">OR</field>
                                                        <value name="A">
                                                          <block type="math_number_property" id="e?=.(h[fL$wK[*?.KXW@">
                                                            <mutation divisor_input="false"></mutation>
                                                            <field name="PROPERTY">EVEN</field>
                                                            <value name="NUMBER_TO_CHECK">
                                                              <shadow type="math_number" id="X5Z(|xcCYdI-LN:VS4js">
                                                                <field name="NUM">0</field>
                                                              </shadow>
                                                              <block type="variables_get" id="odE|(w.wUe7cPT?UkaHY">
                                                                <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="math_number_property" id=")X~rivYVk7!=vdefH{#v">
                                                            <mutation divisor_input="false"></mutation>
                                                            <field name="PROPERTY">ODD</field>
                                                            <value name="NUMBER_TO_CHECK">
                                                              <shadow type="math_number" id="bj0qe5[!Pd_FD_wp#{12">
                                                                <field name="NUM">0</field>
                                                              </shadow>
                                                              <block type="variables_get" id="L/zzKm|4HgOwkUu9X6}?">
                                                                <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="controls_if" id="dWK0q61LV7rL]esis8U5">
                                                        <mutation else="1"></mutation>
                                                        <value name="IF0">
                                                          <block type="logic_compare" id="pK^bCDX?U|Bk64@]4_=_">
                                                            <field name="OP">GTE</field>
                                                            <value name="A">
                                                              <block type="variables_get" id="8K]D]uN0]iNrySZi7}Zu">
                                                                <field name="VAR" id="GO[e,r2@whr7g@1i}sw_">coins</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="variables_get" id="NN]%hN=_7%PAs6O7Gp/+">
                                                                <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_subtract_data_new" id="}wAGuJe3zu.uw8kT7U:b">
                                                            <value name="COUNT">
                                                              <shadow type="math_number" id="uLamBK?+8ck6Hp/bC?jh">
                                                                <field name="NUM">1</field>
                                                              </shadow>
                                                              <block type="variables_get" id="nQi=$T?4gK=--Kog;%F*">
                                                                <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                              </block>
                                                            </value>
                                                            <value name="KEY">
                                                              <shadow type="text" id="*8A9U(f_JUF-ELq%k~Sl">
                                                                <field name="TEXT">points</field>
                                                              </shadow>
                                                              <block type="text_join" id="Q-)?1QGELSio0.=$l2T}" inline="true">
                                                                <mutation items="2"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="qt#N4HL9zPkukUC:E0(X">
                                                                    <field name="TEXT">coins-</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_member_id" id="Js,.xasY!?53RPKc/#RH">
                                                                    <value name="MEMBER">
                                                                      <block type="s4d_message_author" id="xwpC*5UIAda~@^I*qlf|"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="NAME">
                                                              <block type="jg_text_remake_paragraph_quotes" id="T]Fi*AL#RUeT8#ywzHp]">
                                                                <field name="TEXT">economy</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_add_data_new" id="0}g[{a6E(K4[:ADpANAV">
                                                                <value name="COUNT">
                                                                  <shadow type="math_number" id="UL?!S9enD$@n%,qBSY5z">
                                                                    <field name="NUM">1</field>
                                                                  </shadow>
                                                                  <block type="variables_get" id="IE9:Acq(=gi,HCbY||}H">
                                                                    <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="KEY">
                                                                  <shadow type="text" id="(jjsF|@V{|$|ohb|:Gah">
                                                                    <field name="TEXT">points</field>
                                                                  </shadow>
                                                                  <block type="text_join" id="G0wP=igvM.F3;W7LZ{on" inline="true">
                                                                    <mutation items="2"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="text" id="3?9v7RE4!ee5PBI8@T#)">
                                                                        <field name="TEXT">coins-</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="s4d_member_id" id="fS1PzM6{TbqP6=~UE:y/">
                                                                        <value name="MEMBER">
                                                                          <block type="s4d_mentioned_member" id="+Cju1[j=$S0Fg|%(_!%O"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="NAME">
                                                                  <block type="jg_text_remake_paragraph_quotes" id="/v_7s!4C28OMOmfx*(u.">
                                                                    <field name="TEXT">economy</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_embed_create" id=";i%skXfr@XlOcEaTrQxO">
                                                                    <field name="NAME">embed</field>
                                                                    <statement name="THEN">
                                                                      <block type="s4d_embed_set_color" id="Hg@Zj-voo]@*0M^0I5,_">
                                                                        <value name="COLOUR">
                                                                          <shadow type="colour_picker" id="/lix7d23TYy7Y,x#gU+B">
                                                                            <field name="COLOUR">#6666cc</field>
                                                                          </shadow>
                                                                          <block type="colour_random" id="kHf*lJ;;9/;BASfX1g~M"></block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="s4d_embed_set_desc" id="eD2:GnX(XXv@Ch/UWp/2">
                                                                            <value name="DESC">
                                                                              <shadow type="text" id="uji!.Yxj=*5;Rm32?$1.">
                                                                                <field name="TEXT">Some desc here...</field>
                                                                              </shadow>
                                                                              <block type="text_join" id="0NyrJY+RI}Jh|]7PGhPL">
                                                                                <mutation items="5"></mutation>
                                                                                <value name="ADD0">
                                                                                  <block type="s4d_message_author" id="tr9yv,++-!3B.EwyN7Qj"></block>
                                                                                </value>
                                                                                <value name="ADD1">
                                                                                  <block type="text" id="QcSc-Nkq![$T)oIW/ng]">
                                                                                    <field name="TEXT"> you successfully gave </field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="ADD2">
                                                                                  <block type="variables_get" id="NVTz^Ej:k!Ih30I]Y,IB">
                                                                                    <field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="ADD3">
                                                                                  <block type="text" id="k7lSus.Ho+AASTCG.z}8">
                                                                                    <field name="TEXT"> coins to </field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="ADD4">
                                                                                  <block type="s4d_mentioned_member" id="O.kW_gs7-we*vr?!/PUR"></block>
                                                                                </value>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </next>
                                                                      </block>
                                                                    </statement>
                                                                    <next>
                                                                      <block type="s4d_reply" id="l-HeGk+{?kvI%KH.WWkQ">
                                                                        <value name="CONTENT">
                                                                          <shadow type="text" id="yEMd?812RQyR@4S2#TGI">
                                                                            <field name="TEXT">Hey!</field>
                                                                          </shadow>
                                                                          <block type="s4d_embed_send" id="|dMZ2.af@[vn/CAlA{;X">
                                                                            <field name="NAME">embed</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <statement name="ELSE">
                                                          <block type="s4d_reply" id="Db06$9O[Mx/}cR71yNC.">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="oaEF,-}~i;gk{eu+ojdO">
                                                                <field name="TEXT">you dont have enough coins to donate to the member</field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </statement>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="s4d_reply" id="dYNT-|tNqta|k}$8q,i*">
                                                        <value name="CONTENT">
                                                          <shadow type="text" id="N}AJeQ-_hhh(DDV3yP@[">
                                                            <field name="TEXT">enter a valid number and also redo the give process to give coins to the member</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <statement name="catch">
                                      <block type="s4d_reply" id="Q2)9QAy^OrB]G:}KW7k[">
                                        <value name="CONTENT">
                                          <shadow type="text" id="DBTeI}FIVN6qJi7,sI]c">
                                            <field name="TEXT">ping a valid memeber</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;
