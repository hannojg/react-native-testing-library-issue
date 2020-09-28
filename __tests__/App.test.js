import React from "react";
import App from "./../App";
import { render } from '@testing-library/react-native';

it("should render correctly", () => {
    const tree = render(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
})