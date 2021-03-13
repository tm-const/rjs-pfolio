import React from "react";
import Root from "./Root";

export default {
  name: "mq-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      counter: 0,
      searchInputValue: '',
      isDarkModeOn: true,
    }
  },
  actions: {
    theme: {
      setPlusCounter: ({state}) => {
        state.theme.counter +=1;
      },
      setSearchInputValue: ({state}) => value => {
        state.theme.searchInputValue = value;
      },
      setDarkModeOn: ({state}) => {
        state.theme.isDarkModeOn = true;
      },
      setDarkModeOff: ({state}) => {
        state.theme.isDarkModeOn = false;
      }
    }
  }
};
