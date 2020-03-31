import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PlatformSelector from "./PlatformSelector";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Platform.js renders without crashing", () => {
  act(() => {
    render(<PlatformSelector />, container);
  });
});

test("selects Github as the default platform", () => {
  act(() => {
    render(<PlatformSelector />, container);
  });

  expect(container.textContent).toContain("Github");
});
