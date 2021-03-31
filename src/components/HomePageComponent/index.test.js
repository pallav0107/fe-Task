import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ProductView from "./index";
configure({ adapter: new Adapter() });

describe("App", () => {
    it("renders correctly", () => {
        shallow(<ProductView />);
    });

    it("includes eight images", () => {
        const wrapper = shallow(<ProductView />);
        expect(wrapper.find('img').length).toEqual(8);
    });

    it("includes Nav Bar", () => {
        const wrapper = shallow(<ProductView />);
        expect(wrapper.find('nav').length).toEqual(1);
    });

    it('expect to call setState for all product type 2 times', () => {
        const wrapper = shallow(<ProductView />);
        const all = 'All';
        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleFilter(all);

        expect(wrapper.instance().setState).toBeCalledTimes(2)
    });

    it('expect to call setState for wine product type 2 times', () => {
        const wrapper = shallow(<ProductView />);
        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleFilter("wine");

        expect(wrapper.instance().setState).toBeCalledTimes(2)
    });

    it('expect to call setState for search filter for all search', () => {
        const wrapper = shallow(<ProductView />);
        const all = 'All';
        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleSearchFilter(all);

        expect(wrapper.instance().setState).toBeCalledTimes(1)
    });

    it('expect to call setState for search filter for wi search', () => {
        const wrapper = shallow(<ProductView />);
        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleSearchFilter("wi");

        expect(wrapper.instance().setState).toBeCalledTimes(1)
    });

    it("includes eight h6 elements for productname and price", () => {
        const wrapper = shallow(<ProductView />);
        expect(wrapper.find('h6').length).toEqual(8);
    });

    it("Check first product name and price", () => {
        const wrapper = shallow(<ProductView />);
        expect(wrapper.find('h6').first().text()).toEqual("Pure Blonde Crate      $49.99");
    });

    it("Check last product name and price", () => {
        const wrapper = shallow(<ProductView />);
        expect(wrapper.find('h6').last().text()).toEqual("Scrumpy RBerry 6x1.25L      $49.99");
    });

    it("Checks 4 for sale Products", () => {
        const wrapper = shallow(<ProductView />);
        expect(wrapper.find('div.top-left-corner').length).toEqual(4);
    });

});