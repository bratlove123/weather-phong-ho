import React from "react";
import { SearchInput } from "./searchInput";
import renderer from "react-test-renderer";

it("sets search button icon to spinner when saving is true", () => {
  const tree = renderer.create(
    <SearchInput saving onSubmitSearch={jest.fn()} placeholder="test" />
  );

  expect(tree).toMatchSnapshot();
});


it("sets search button icon to search when saving is false", () => {
  const tree = renderer.create(
    <SearchInput saving={false} onSubmitSearch={jest.fn()} placeholder="test" />
  );

  expect(tree).toMatchSnapshot();
});