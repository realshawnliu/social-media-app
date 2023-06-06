import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "../../src/scenes/navbar/index";
import configureStore from "redux-mock-store";
import { themeSettings } from "../../src/theme";

describe("Navbar Component", () => {
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore(); // initialize a mock redux store if you have redux in your app
    const theme = createTheme(themeSettings("light"));

    // You need to provide a mock state for the store
    mockStore = mockStore({
      user: {
        firstName: "John",
        lastName: "Doe",
        friends: [],
      },
      token: "sometoken",
      mode: "light",
    });

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Navbar />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  test("renders Navbar component", () => {
    const navbar = screen.getByText(/sociopedia/i);
    expect(navbar).toBeInTheDocument();
  });

  // test("Mode switch button changes the theme", () => {
  //   const modeSwitchButton = screen.getByTestId('LightModeIcon');
  //   fireEvent.click(modeSwitchButton);
  // });

  // test("Mobile menu opens and closes correctly", () => {
  //   const menuButton = screen.getByRole("button", { name: /menu/i });
  //   fireEvent.click(menuButton);
  // });
});
