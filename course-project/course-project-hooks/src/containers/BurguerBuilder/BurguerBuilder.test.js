import React from "react";
import {BurguerBuilder} from "./BurguerBuilder";
import BuildControls from "../../components/Burguer/BuildControls/BuildControls"

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<BurguerBuilder />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurguerBuilder onInitIngredients={() => {}}/>);
    });

    it("should render <BuildControls /> when receiving ingredients", () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1)  
    });
});
