import { fireEvent, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/config/tests/renderWithRouter/renderWithRouter";

describe("Counter", () => {
  test("test render", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId("title")).toHaveTextContent("10");
  });
  test("increment btn", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const btn = screen.getByTestId("increment-btn");
    fireEvent.click(btn);
    expect(screen.getByTestId("title")).toHaveTextContent("11");
  });

  test("decrement btn", () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const btn = screen.getByTestId("decrement");
    fireEvent.click(btn);
    expect(screen.getByTestId("title")).toHaveTextContent("9");
  });
});
