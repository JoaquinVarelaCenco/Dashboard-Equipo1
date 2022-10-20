import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../../context/ThemeContext";
import SwitchToggle from "./SwitchToggle";

let component;
const handleChange = jest.fn();

describe("Test checkbox para el funcionamiento de DarkMode", () => {
  beforeEach(() => {
    component = render(
      <ThemeProvider>
        <SwitchToggle onChange={handleChange} />
      </ThemeProvider>
    );
    // screen.debug()
  });

  test("El checkbox de darkMode debe cambiar su estado al darse click ", () => {
    const switchMode = screen.getByRole("checkbox");
    expect(switchMode).not.toBeChecked();

    userEvent.click(switchMode);
    expect(switchMode).toBeChecked();
  });
});
