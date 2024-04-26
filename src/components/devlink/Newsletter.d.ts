import * as React from "react";
import * as Types from "./types";

declare function Newsletter(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  terms?: React.ReactNode;
  description?: React.ReactNode;
  title?: React.ReactNode;
}): React.JSX.Element;
