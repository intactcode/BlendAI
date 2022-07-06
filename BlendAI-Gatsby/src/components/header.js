import React from "react"
import "./header.css"

import { Logo } from "../utils/imgImport"


const Header = () => {

  return (
    <header className="container">
      <div
        id="rec246667908"
        class="r t-rec"
        data-animationappear="off"
        data-record-type="131"
      >
        <div class="t123">
          <div class="t-container_100">
            <div class="t-width t-width_100">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="rec290925405"
        class="r t-rec t-screenmin-640px"
        data-animationappear="off"
        data-record-type="257"
        data-screen-min="640px"
      >
        <div id="nav290925405marker"></div>
        <div class="t228__mobile t228__positionfixed">
          <div class="t228__mobile_container">
            <div class="t228__mobile_text t-name t-name_md" field="text">
              &nbsp;
            </div>
            <div class="t228__burger">
              <span></span> <span></span> <span></span> <span></span>
            </div>
          </div>
        </div>
        <div
          id="nav290925405"
          class="t228 t228__hidden t228__positionfixed"
          style={{ backgroundColor: `rgba(255, 255, 255, 1); height: 64px` }}
          data-bgcolor-hex="#ffffff"
          data-bgcolor-rgba="rgba(255,255,255,1)"
          data-navmarker="nav290925405marker"
          data-appearoffset=""
          data-bgopacity-two=""
          data-menushadow=""
          data-bgopacity="1"
          data-menu-items-align="center"
          data-menu="yes"
        >
          <div class="t228__maincontainer" style={{ height: "64px" }}>
            <div class="t228__padding40px"></div>
            <div class="t228__leftside">
              <div class="t228__leftcontainer">
                <a href="https://blend-ai.com" >
                  <img
                    src={Logo}
                    class="t228__imglogo"
                    imgfield="img"
                    style={{ maxHeight: "80px" }}
                    alt="BlendAi"
                  /></a>
              </div>
            </div>
            <div class="t228__centerside">
              <div class="t228__centercontainer">
                <ul class="t228__list t228__list_hidden">
                  <li class="t228__list_item" style={{ padding: "0 30px 0 0" }}>
                    <a
                      class="t-menu__link-item"
                      href="#about"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans'
                      }}
                      data-menu-item-number="1"
                    >About</a
                    >
                  </li>
                  <li class="t228__list_item" style={{ padding: "0 30px" }}>
                    <a
                      class="t-menu__link-item"
                      href="#services"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans',
                      }}
                      data-menu-item-number="2"
                    >Services</a
                    >
                  </li>
                  <li class="t228__list_item" style={{ padding: "0 30px" }}>
                    <a
                      class="t-menu__link-item"
                      href="#productfeed"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans',
                      }}
                      data-menu-item-number="3"
                    >Product Feed</a
                    >
                  </li>
                  <li class="t228__list_item" style={{ padding: "0 0 0 30px" }}>
                    <a
                      class="t-menu__link-item"
                      href="#pricing"
                      data-menu-submenu-hook=""
                      style={{
                        color: "#222e63",
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: 'NunitoSans',
                      }}
                      data-menu-item-number="4"
                    >Pricing</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="t228__rightside">
              <div class="t228__rightcontainer">
                <div class="t228__right_buttons">
                  <div class="t228__right_buttons_wrap">
                    <div class="t228__right_buttons_but">
                      <a
                        href="https://app.blend-ai.com/#/auth/ecommerce"
                        target="_blank"
                        class="t-btn js-click-stat"
                        data-tilda-event-name="/tilda/click/rec290925405/button1"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#566fff",
                          borderRadius: "4px",
                          fontFamily: "NunitoSans",
                          fontWeight: "600",
                        }}
                      >
                        <table style={{ width: "100%", height: "100%" }}>
                          <tr>
                            <td>Sign Up</td>
                          </tr>
                        </table>
                      </a>
                    </div>
                    <div class="t228__right_buttons_but">
                      <a
                        href="https://app.blend-ai.com/#/auth/login"
                        target=""
                        class="t-btn js-click-stat"
                        data-tilda-event-name="/tilda/click/rec290925405/button2"
                        style={{
                          color: "#222e63",
                          border: "1px solid #6a85fc",
                          borderRadius: "4px",
                          fontFamily: "NunitoSans",
                          fontWeight: 600,
                        }}
                      >
                        <table style={{ width: "100%", height: "100%" }}>
                          <tr>
                            <td>Log In</td>
                          </tr>
                        </table>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="t228__padding40px"></div>
          </div>
        </div>

        {/* <script>
          $(window).on("load", function () {
            if (typeof t228_setWidth !== "undefined") {
              t228_setWidth("290925405");
            }
          });
          $(window).on("resize", function () {
            if (typeof t228_setWidth !== "undefined") {
              t228_setWidth("290925405");
            }
            t228_setBg("290925405");
          });
          $(document).ready(function () {
            setTimeout(function () {
              t228_highlight();
            }, 500);
            t228_checkAnchorLinks("290925405");
            if (typeof t228__init === "function") {
              t228__init("290925405");
            }
            t228_setBg("290925405");
            if (typeof t228_setWidth !== "undefined") {
              t228_setWidth("290925405");
            }
            t228_createMobileMenu("290925405");
          });
        </script> */}


        {/* <script type="text/javascript">
          $(document).ready(function () {
            setTimeout(function () {
              t_onFuncLoad("t_menusub_init", function () {
                t_menusub_init("290925405");
              });
            }, 500);
          });
        </script> */}

      </div>

      <div
        id="rec290926020"
        class="r t-rec t-screenmax-640px"
        data-animationappear="off"
        data-record-type="396"
        data-screen-max="640px"
      >

        <div class="t396">
          <div
            class="t396__artboard"
            data-artboard-recid="290926020"
            data-artboard-height="64"
            data-artboard-height-res-320="64"
            data-artboard-height_vh=""
            data-artboard-valign="center"
            data-artboard-upscale="grid"
            data-artboard-ovrflw=""
          >
            <div class="t396__carrier" data-artboard-recid="290926020"></div>
            <div class="t396__filter" data-artboard-recid="290926020"></div>
            <div
              class="t396__elem tn-elem tn-elem__2909260201599720199226"
              data-elem-id="1599720199226"
              data-elem-type="image"
              data-field-top-value="20"
              data-field-top-res-320-value="19"
              data-field-left-value="20"
              data-field-left-res-320-value="10"
              data-field-width-value="120"
              data-field-axisy-value="top"
              data-field-axisx-value="left"
              data-field-container-value="grid"
              data-field-container-res-320-value="window"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value="px"
              data-field-filewidth-value="140"
              data-field-fileheight-value="32"
            >
              <div class="tn-atom">
                <img
                  class="tn-atom__img t-img"
                  data-original={Logo}
                  imgfield="tn_img_1599720199226"
                />
              </div>
            </div>
            <div
              class="t396__elem tn-elem tn-elem__2909260201599720264742"
              data-elem-id="1599720264742"
              data-elem-type="button"
              data-field-top-value="12"
              data-field-top-res-960-value="12"
              data-field-top-res-640-value="12"
              data-field-top-res-480-value="12"
              data-field-top-res-320-value="0"
              data-field-left-value="1082"
              data-field-left-res-960-value="850"
              data-field-left-res-640-value="530"
              data-field-left-res-480-value="370"
              data-field-left-res-320-value="-10"
              data-field-height-value="40"
              data-field-height-res-320-value="40"
              data-field-width-value="100"
              data-field-width-res-320-value="70"
              data-field-axisy-value="top"
              data-field-axisy-res-320-value="center"
              data-field-axisx-value="left"
              data-field-axisx-res-320-value="right"
              data-field-container-value="grid"
              data-field-container-res-320-value="window"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value=""
            >
              <a
                class="tn-atom js-click-zero-stat"
                href="https://app.blend-ai.com/#/auth/login"
                data-tilda-event-name="/tilda/click/rec290926020/button1599720264742"
              >Log In</a
              >
            </div>
            <div
              class="t396__elem tn-elem tn-elem__2909260201599720426760"
              data-elem-id="1599720426760"
              data-elem-type="button"
              data-field-top-value="12"
              data-field-top-res-960-value="12"
              data-field-top-res-640-value="12"
              data-field-top-res-480-value="12"
              data-field-top-res-320-value="0"
              data-field-left-value="970"
              data-field-left-res-960-value="738"
              data-field-left-res-640-value="418"
              data-field-left-res-480-value="258"
              data-field-left-res-320-value="-88"
              data-field-height-value="40"
              data-field-height-res-320-value="40"
              data-field-width-value="100"
              data-field-width-res-320-value="70"
              data-field-axisy-value="top"
              data-field-axisy-res-320-value="center"
              data-field-axisx-value="left"
              data-field-axisx-res-320-value="right"
              data-field-container-value="grid"
              data-field-container-res-320-value="window"
              data-field-topunits-value="px"
              data-field-leftunits-value="px"
              data-field-heightunits-value=""
              data-field-widthunits-value=""
            >
              <a
                class="tn-atom js-click-zero-stat"
                href="https://app.blend-ai.com/#/auth/ecommerce"
                data-tilda-event-name="/tilda/click/rec290926020/button1599720426760"
              >Sign Up</a
              >
            </div>
          </div>
        </div>
        <script>
          $(document).ready(function () {
            // t396_init("290926020");
          });
        </script>
      </div>
    </header >
  )
}

export default Header
