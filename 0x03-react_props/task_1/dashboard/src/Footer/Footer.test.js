import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists());
    });
    test('copy test contains "Copyright" ', () => {
        const wrapper = shallow(<Footer />);
        const p = wrapper.find('p');
        const check = /Copyright/;

        expect(check.test(wrapper.text()));
    });
});



