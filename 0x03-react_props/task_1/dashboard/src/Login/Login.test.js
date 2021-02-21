import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
    test('renders without crashing', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists());
    });

    test('renders two input & lab tags', () => {
       
            const wrapper = shallow(<Login />);
        
            const inputs = wrapper.find('input');
            const labels = wrapper.find('label');
        
            expect(inputs).to.have.lengthOf(2);
            expect(labels).to.have.lengthOf(2);;
          });
  
});