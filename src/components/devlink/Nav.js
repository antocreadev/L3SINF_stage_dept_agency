"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-5":{"id":"e-5","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navigation-link","originalId":"6626a2dd4c2e24d15c7fc931|cf1dbc31-fbbb-da21-1378-263e66cdca63","appliesTo":"CLASS"},"targets":[{"selector":".navigation-link","originalId":"6626a2dd4c2e24d15c7fc931|cf1dbc31-fbbb-da21-1378-263e66cdca63","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1531484081100},"e-6":{"id":"e-6","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".navigation-link","originalId":"6626a2dd4c2e24d15c7fc931|cf1dbc31-fbbb-da21-1378-263e66cdca63","appliesTo":"CLASS"},"targets":[{"selector":".navigation-link","originalId":"6626a2dd4c2e24d15c7fc931|cf1dbc31-fbbb-da21-1378-263e66cdca63","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1531484081103}},"actionLists":{"a":{"id":"a","title":"Hover In","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navigation-hover","selectorGuids":["5f0849dd-6d76-7ca1-f7e1-39839b6582a8"]},"value":0,"unit":""}},{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navigation-hover","selectorGuids":["5f0849dd-6d76-7ca1-f7e1-39839b6582a8"]},"heightValue":0,"widthUnit":"PX","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuint","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navigation-hover","selectorGuids":["5f0849dd-6d76-7ca1-f7e1-39839b6582a8"]},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navigation-hover","selectorGuids":["5f0849dd-6d76-7ca1-f7e1-39839b6582a8"]},"heightValue":4,"widthUnit":"PX","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1531484941719},"a-2":{"id":"a-2","title":"Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navigation-hover","selectorGuids":["5f0849dd-6d76-7ca1-f7e1-39839b6582a8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuart","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navigation-hover","selectorGuids":["5f0849dd-6d76-7ca1-f7e1-39839b6582a8"]},"heightValue":0,"widthUnit":"PX","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1531484941719}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navigation")}
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navigation-container")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "logo")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-logo")}
            width="auto"
            height="auto"
            loading="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6626a2dd4c2e24d15c7fc8da/6626a2dd4c2e24d15c7fc94c_noiceland_logo.svg"
          />
        </_Builtin.Link>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "navigation-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-link-text")}
              tag="div"
            >
              {"Home"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-hover")}
              tag="div"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "navigation-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-link-text")}
              tag="div"
            >
              {"Latest"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-hover")}
              tag="div"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "navigation-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-link-text")}
              tag="div"
            >
              {"About"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navigation-hover")}
              tag="div"
            />
          </_Builtin.Link>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-button")}
          tag="div"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "icon-2")}
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
