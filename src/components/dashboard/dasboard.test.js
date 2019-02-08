import React from "react";
import { shallow } from "enzyme";
import PlayersRating from "../playersRating/playersRating";
import Dashboard from "./dashboard";

describe("dashboard", () => {
  it("should contain a PlayersRating component", () => {
    const wraper = shallow(<Dashboard />);

    expect(wraper.find(PlayersRating)).toHaveLength(1);
  });
});
