/* eslint-disable jest/valid-expect */
// import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import SimpleButton from "../components/SimpleButton";

configure({
   adapter: new Adapter()
});
describe("Testing <SimpleButton/> Component", () => {
   it("Simple button renders a text", () => {
      const wrapper = shallow(<SimpleButton />);
      const buttonElement = wrapper.find('#ClickMe')
      expect(buttonElement).to.have.lengthOf(1)
      expect(buttonElement.text()).equal('Click Me')
   });
   chai.use(chaiEnzyme());
});