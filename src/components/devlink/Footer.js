"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-footer")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "top-section")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "logo", "cc-footer")}
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
                src="https://uploads-ssl.webflow.com/6626a2dd4c2e24d15c7fc8da/6626a2dd4c2e24d15c7fc954_logo-white.svg"
              />
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-small-text")}
              tag="div"
            >
              {"© 2018 Noiceland™, all rights reserved"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "separator-footer")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "separator-color", "footer-line")}
            tag="div"
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "bottom")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "bottom-1")}
              tag="div"
            >
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "dropdown")}
                tag="div"
                delay="0"
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block tag="div">{"Category"}</_Builtin.Block>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-list")}
                  tag="nav"
                >
                  <_Builtin.NotSupported _atom="DynamoWrapper" />
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-categories")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-title-text")}
                  tag="div"
                >
                  {"Categories"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "footer-links-container",
                    "cc-categories"
                  )}
                  tag="div"
                >
                  <_Builtin.NotSupported _atom="DynamoWrapper" />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-newsletter")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-title-text")}
                  tag="div"
                >
                  {"Subscribe to newsletter"}
                </_Builtin.Block>
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "form-block")}
                >
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "form")}
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    id="email-form"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "text-field")}
                      autoFocus={false}
                      maxLength={256}
                      name="Email-3"
                      data-name="Email 3"
                      placeholder="Email address"
                      type="email"
                      disabled={false}
                      required={true}
                      id="Email-3"
                    />
                    <_Builtin.FormButton
                      className={_utils.cx(_styles, "submit-button")}
                      type="submit"
                      value="Send"
                      data-wait="Please wait..."
                    />
                  </_Builtin.FormForm>
                  <_Builtin.FormSuccessMessage>
                    <_Builtin.Block tag="div">
                      {"Thank you! Your submission has been received!"}
                    </_Builtin.Block>
                  </_Builtin.FormSuccessMessage>
                  <_Builtin.FormErrorMessage>
                    <_Builtin.Block tag="div">
                      {"Oops! Something went wrong while submitting the form."}
                    </_Builtin.Block>
                  </_Builtin.FormErrorMessage>
                </_Builtin.FormWrapper>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "bottom-2")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-links-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-links")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-title-text")}
                    tag="div"
                  >
                    {"Information"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-links-inner")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"about"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "http://blog-b132a3.webflow.io/about#contact",
                      }}
                    >
                      {"contact"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"terms"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-links")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-title-text")}
                    tag="div"
                  >
                    {"follow us"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-links-inner")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"instagram"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"facebook"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"twitter"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-links")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-title-text")}
                    tag="div"
                  >
                    {"Template"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer-links-inner")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Image License Info"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-link", "white")}
                      button={false}
                      block=""
                      options={{
                        href: "https://webflow.com/",
                      }}
                    >
                      {"Powered by Webflow"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
