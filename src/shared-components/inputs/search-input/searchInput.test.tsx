import React from "react";
import { SearchInput } from "./searchInput";
import { mount, shallow } from "enzyme";

describe("search input test", () => {
  it("sets search button icon to spinner when saving is true", () => {
    const searchInput = mount(
      <SearchInput saving onSubmitSearch={jest.fn()} placeholder="test" />
    );

    expect(
      searchInput.find("button").find("svg").hasClass("fa-spin")
    ).toBeTruthy();
  });

  it("sets search button icon to search when saving is false", () => {
    const searchInput = mount(
      <SearchInput
        saving={false}
        onSubmitSearch={jest.fn()}
        placeholder="test"
      />
    );

    expect(
      searchInput.find("button").find("svg").hasClass("fa-search")
    ).toBeTruthy();
  });

  it("submit props action when click search button", () => {
    const searchFunc = jest.fn();
    const searchInput = shallow(
      <SearchInput
        saving={false}
        onSubmitSearch={searchFunc}
        placeholder="test"
      />
    );
    searchInput
      .find("input")
      .simulate("change", { target: { value: "London" } });
    searchInput.find("button").simulate("click");
    expect(searchFunc.mock.calls.length).toEqual(1);
  });

  it("check elements", () => {
    const tree = shallow(
      <SearchInput
        saving={false}
        onSubmitSearch={jest.fn()}
        placeholder="test"
      />
    );

    expect(tree.find("input").length).toEqual(1);
    expect(tree.find("button").length).toEqual(1);
  });
});
