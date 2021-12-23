import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="its my first React app" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("its my first React app");
  });
  test("after create span displayed", () => {
    const component = create(<ProfileStatus status="its my first React app" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span).not.toBeNull();
  });
  test("after create span displayed with correct status", () => {
    const component = create(<ProfileStatus status="its my first React app" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe("its my first React app");
  });
  test("after create input not be displayed", () => {
    const component = create(<ProfileStatus status="its my first React app" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });

  test("input should be displayed in edit mode -input- instead of span", () => {
    const component = create(<ProfileStatus status="its my first React app" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe("its my first React app");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="its my first React app" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});