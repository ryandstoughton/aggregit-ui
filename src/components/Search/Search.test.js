import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Search from "./Search";

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

test("Search.js renders without crashing", () => {
  act(() => {
    render(<Search usernameLookup={() => {}} />, container);
  });
});

test("displays the 'Add Data' button", () => {
  act(() => {
    render(<Search usernameLookup={() => {}} />, container);
  });

  expect(container.textContent).toContain("Add Data");
});
