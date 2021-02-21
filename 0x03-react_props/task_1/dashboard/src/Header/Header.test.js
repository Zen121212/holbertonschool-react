import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists());
    });

    test('should render an image and h1', () => {
        const wrapper = shallow(<Header />);
        const image = wrapper.find('img');
        const h1 = wrapper.find('h1');

        expect(image.exists());
        expect(h1.exists());
    });
});