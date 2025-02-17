"use client"; // Ensures this is a Client Component

import { Provider } from "react-redux";
import store from "./index"; // Adjust the path if needed

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
