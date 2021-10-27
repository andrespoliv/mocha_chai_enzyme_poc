// import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import StateButton from "../components/StateButton";

configure({
   adapter: new Adapter()
});
describe("Testing <StateButton/> Component", () => {
   it("State button renders a text after click", () => {
      const wrapper = shallow(<StateButton />);
      const buttonElement = wrapper.find('#ClickMe')
      buttonElement.simulate('click')
      const text = wrapper.find('p').text();

      expect(text).equal('You have clicked: 1 time')
   });
   chai.use(chaiEnzyme());
});