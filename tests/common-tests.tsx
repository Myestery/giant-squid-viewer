import "jest-canvas-mock";

import * as React from "react";

import { act, render } from "@testing-library/react";
import { beforeEach, describe, it, jest } from "@jest/globals";

import { Viewer } from "../src";

beforeEach(() => {
  const dummyMoviesData = [
    { title: "some-tilte-1", body: "some-1" },
    { title: "some-tilte-2", body: "some-2" },
    { title: "some-tilte-3", body: "some-3" },
  ];
  const globalAny: any = global;
  globalAny.fetch = jest.fn(() => Promise.resolve(dummyMoviesData));
});
describe("Common render", () => {
  it("renders without crashing", async() => {
    await act( async () => render(<Viewer coins={[]} pollInterval={1000} />));
  });
  
  // it doesnt throw error with poor network
  // it("renders without crashing with poor network", async () => {
    
});
