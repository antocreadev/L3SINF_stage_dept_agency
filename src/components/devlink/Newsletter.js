"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalStyles } from "./GlobalStyles";
import * as _utils from "./utils";
import _styles from "./Newsletter.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"JIGGLE_EFFECT","config":{"actionListId":"jiggle","autoStopEventId":"e-4"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"14055fa6-4932-5084-6916-46114611e828"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1714047218630}},"actionLists":{"jiggle":{"id":"jiggle","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Newsletter({
  as: _Component = _Builtin.Grid,
  image = "https://uploads-ssl.webflow.com/661e517129da8e366f7b8b16/661e529c2aa121b41c5da4a3_63a9e5cdd7d899681a5da8efbc37b2890722a4ad.jpg",
  terms = (
    <>
      {"By clicking Sign Up you're confirming that you agree with our "}
      {"."}
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  title = "Medium length hero heading goes here",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "header2_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "header2_content")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "margin-bottom", "margin-small")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-style-h1-2")}
            tag="h1"
          >
            {title}
          </_Builtin.Heading>
          <GlobalStyles />
        </_Builtin.Block>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "text-size-medium-2")}
        >
          {description}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "margin-top", "margin-medium")}
          tag="div"
        >
          <_Builtin.FormWrapper
            className={_utils.cx(_styles, "header2_form_component")}
          >
            <_Builtin.FormForm
              className={_utils.cx(_styles, "header2_form")}
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "form_input-2")}
                autoFocus={false}
                maxLength={256}
                name="email-2"
                data-name="Email 2"
                placeholder="Enter your email"
                type="email"
                disabled={false}
                required={true}
                id="email-2"
              />
              <_Builtin.FormButton
                className={_utils.cx(_styles, "button")}
                data-w-id="14055fa6-4932-5084-6916-46114611e828"
                type="submit"
                value="Sign up"
                data-wait="Please wait..."
              />
            </_Builtin.FormForm>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-size-tiny")}
              tag="div"
            >
              {terms}
            </_Builtin.Block>
            <_Builtin.FormSuccessMessage
              className={_utils.cx(_styles, "success-message")}
            >
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage
              className={_utils.cx(_styles, "error-message")}
            >
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "header2_image-wrapper")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "header2_image")}
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
    </_Component>
  );
}
