import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import MyButton from "../src/MyButton";
import MyForm from "../src/MyForm";
import Progress from "../src/Progress";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("MyButton", module).add("default", () => <MyButton />);

storiesOf("MyForm", module).add("default", () => <MyForm />);

storiesOf("Progress", module).add("default", () => <Progress />);
