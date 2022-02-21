import React from "react";
import LoginPage from "../components/LoginPage";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import { Provider } from "react-redux";
describe("Login Form Component", () => {
  it("validate for email input", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <LoginPage location={location}></LoginPage>
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
          <LoginPage location={location}></LoginPage>
        </Router>
      </Provider>
    );
    const input = getByTestId("email");
    expect(input).toBeFalsy;
  });
});
