import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import { Provider } from "react-redux";
import CreateBlogPage from "../components/CreateBlogPage";
describe("Blog Create Form Component", () => {
  it("validate for email input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CreateBlogPage></CreateBlogPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("title");
    expect(input).toBeTruthy;
  });
  it("validate for description input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CreateBlogPage></CreateBlogPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("description");
    expect(input).toBeTruthy;
  });
  it("validate for blogType input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <CreateBlogPage></CreateBlogPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("blogType");
    expect(input).toBeTruthy;
  });
});
