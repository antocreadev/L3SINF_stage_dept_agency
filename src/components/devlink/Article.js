"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Article.module.css";

export function Article({ as: _Component = _Builtin.Grid }) {
  return (
    <_Component className={_utils.cx(_styles, "layout1_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "layout1_content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "margin-bottom", "margin-xsmall")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-weight-semibold")}
            tag="div"
          >
            {"Tagline"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "margin-bottom", "margin-small")}
          tag="div"
        >
          <_Builtin.Heading tag="h2">
            {"Medium length section heading goes here"}
          </_Builtin.Heading>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "global-styles")}
            value="%3Cstyle%3E%0A%0A%2F*%20Set%20color%20style%20to%20inherit%20*%2F%0A.inherit-color%20*%20%7B%0A%20%20%20%20color%3A%20inherit%3B%0A%7D%0A%0A%2F*%20Focus%20state%20style%20for%20keyboard%20navigation%20for%20the%20focusable%20elements%20*%2F%0A*%5Btabindex%5D%3Afocus-visible%2C%0A%20%20input%5Btype%3D%22file%22%5D%3Afocus-visible%20%7B%0A%20%20%20outline%3A%200.125rem%20solid%20%234d65ff%3B%0A%20%20%20outline-offset%3A%200.125rem%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%20%3E%20%3Anot(div)%3Afirst-child%2C%20.w-richtext%20%3E%20div%3Afirst-child%20%3E%20%3Afirst-child%20%7B%0A%20%20margin-top%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Prevent%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-on%20%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Create%20a%20class%20of%20.div-square%20which%20maintains%20a%201%3A1%20dimension%20of%20a%20div%20*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment%20*%2F%0A.container-medium%2C.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%20%20margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*%20%0AMake%20the%20following%20elements%20inherit%20typography%20styles%20from%20the%20parent%20and%20not%20have%20hardcoded%20values.%20%0AImportant%3A%20You%20will%20not%20be%20able%20to%20style%20for%20example%20%22All%20Links%22%20in%20Designer%20with%20this%20CSS%20applied.%0AUncomment%20this%20CSS%20to%20use%20it%20in%20the%20project.%20Leave%20this%20message%20for%20future%20hand-off.%0A*%2F%0A%2F*%0Aa%2C%0A.w-input%2C%0A.w-select%2C%0A.w-tab-link%2C%0A.w-nav-link%2C%0A.w-dropdown-btn%2C%0A.w-dropdown-toggle%2C%0A.w-dropdown-link%20%7B%0A%20%20color%3A%20inherit%3B%0A%20%20text-decoration%3A%20inherit%3B%0A%20%20font-size%3A%20inherit%3B%0A%7D%0A*%2F%0A%0A%2F*%20Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Adds%20inline%20flex%20display%20*%2F%0A.display-inlineflex%20%7B%0A%20%20display%3A%20inline-flex%3B%0A%7D%0A%0A%2F*%20These%20classes%20are%20never%20overwritten%20*%2F%0A.hide%20%7B%0A%20%20display%3A%20none%20!important%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.hide%2C%20.hide-tablet%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.hide-mobile-landscape%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.hide-mobile%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%0A.margin-0%20%7B%0A%20%20margin%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-0%20%7B%0A%20%20padding%3A%200rem%20!important%3B%0A%7D%0A%0A.spacing-clean%20%7B%0Apadding%3A%200rem%20!important%3B%0Amargin%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-top%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-top%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-right%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-right%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-bottom%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-bottom%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-left%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-left%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-horizontal%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-horizontal%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-vertical%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-vertical%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20at%20100%25%20width%20*%2F%0A.truncate-width%20%7B%20%0A%09%09width%3A%20100%25%3B%20%0A%20%20%20%20white-space%3A%20nowrap%3B%20%0A%20%20%20%20overflow%3A%20hidden%3B%20%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%20%0A%7D%0A%2F*%20Removes%20native%20scrollbar%20*%2F%0A.no-scrollbar%20%7B%0A%20%20%20%20-ms-overflow-style%3A%20none%3B%0A%20%20%20%20overflow%3A%20-moz-scrollbars-none%3B%20%0A%7D%0A%0A.no-scrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "global-styles")}
            value="%3Cstyle%3E%0A%0A%2F*%20Set%20color%20style%20to%20inherit%20*%2F%0A.inherit-color%20*%20%7B%0A%20%20%20%20color%3A%20inherit%3B%0A%7D%0A%0A%2F*%20Focus%20state%20style%20for%20keyboard%20navigation%20for%20the%20focusable%20elements%20*%2F%0A*%5Btabindex%5D%3Afocus-visible%2C%0A%20%20input%5Btype%3D%22file%22%5D%3Afocus-visible%20%7B%0A%20%20%20outline%3A%200.125rem%20solid%20%234d65ff%3B%0A%20%20%20outline-offset%3A%200.125rem%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%20%3E%20%3Anot(div)%3Afirst-child%2C%20.w-richtext%20%3E%20div%3Afirst-child%20%3E%20%3Afirst-child%20%7B%0A%20%20margin-top%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Prevent%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-on%20%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Create%20a%20class%20of%20.div-square%20which%20maintains%20a%201%3A1%20dimension%20of%20a%20div%20*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment%20*%2F%0A.container-medium%2C.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%20%20margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*%20%0AMake%20the%20following%20elements%20inherit%20typography%20styles%20from%20the%20parent%20and%20not%20have%20hardcoded%20values.%20%0AImportant%3A%20You%20will%20not%20be%20able%20to%20style%20for%20example%20%22All%20Links%22%20in%20Designer%20with%20this%20CSS%20applied.%0AUncomment%20this%20CSS%20to%20use%20it%20in%20the%20project.%20Leave%20this%20message%20for%20future%20hand-off.%0A*%2F%0A%2F*%0Aa%2C%0A.w-input%2C%0A.w-select%2C%0A.w-tab-link%2C%0A.w-nav-link%2C%0A.w-dropdown-btn%2C%0A.w-dropdown-toggle%2C%0A.w-dropdown-link%20%7B%0A%20%20color%3A%20inherit%3B%0A%20%20text-decoration%3A%20inherit%3B%0A%20%20font-size%3A%20inherit%3B%0A%7D%0A*%2F%0A%0A%2F*%20Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Adds%20inline%20flex%20display%20*%2F%0A.display-inlineflex%20%7B%0A%20%20display%3A%20inline-flex%3B%0A%7D%0A%0A%2F*%20These%20classes%20are%20never%20overwritten%20*%2F%0A.hide%20%7B%0A%20%20display%3A%20none%20!important%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.hide%2C%20.hide-tablet%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.hide-mobile-landscape%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.hide-mobile%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%0A.margin-0%20%7B%0A%20%20margin%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-0%20%7B%0A%20%20padding%3A%200rem%20!important%3B%0A%7D%0A%0A.spacing-clean%20%7B%0Apadding%3A%200rem%20!important%3B%0Amargin%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-top%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-top%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-right%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-right%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-bottom%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-bottom%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-left%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-left%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-horizontal%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-horizontal%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-vertical%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-vertical%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20at%20100%25%20width%20*%2F%0A.truncate-width%20%7B%20%0A%09%09width%3A%20100%25%3B%20%0A%20%20%20%20white-space%3A%20nowrap%3B%20%0A%20%20%20%20overflow%3A%20hidden%3B%20%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%20%0A%7D%0A%2F*%20Removes%20native%20scrollbar%20*%2F%0A.no-scrollbar%20%7B%0A%20%20%20%20-ms-overflow-style%3A%20none%3B%0A%20%20%20%20overflow%3A%20-moz-scrollbars-none%3B%20%0A%7D%0A%0A.no-scrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
          />
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "text-size-medium-3")}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          }
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "margin-top", "margin-medium")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button-3", "is-secondary")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Button"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "button-3", "is-link", "is-icon")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Button"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-embed-xxsmall")}
                value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%203L11%208L6%2013%22%20stroke%3D%22CurrentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "layout1_image-wrapper")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "layout1_image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/661e517129da8e366f7b8b16/662a4b025c968395a16c5f70_Cosmos%20portrait.jpeg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
