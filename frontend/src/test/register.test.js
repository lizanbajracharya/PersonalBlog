import React from "react";
import RegisterPage from "../components/RegisterPage";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import { Provider } from "react-redux";
describe("Register Form Component", () => {
  it("validate for email input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <RegisterPage location={location}></RegisterPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("email");
    expect(input).toBeTruthy;
  });
  it("validate for incorrect email input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <RegisterPage location={location}></RegisterPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("email");
    expect(input).toBeFalsy;
  });

  it("validate for username input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <RegisterPage location={location}></RegisterPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("username");
    expect(input).toBeTruthy;
  });
  it("validate for incorrect username input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <RegisterPage location={location}></RegisterPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("username");
    expect(input).toBeFalsy;
  });
});
