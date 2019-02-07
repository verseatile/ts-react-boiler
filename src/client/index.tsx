import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("render-target")
);

document.body.style.margin = "0"