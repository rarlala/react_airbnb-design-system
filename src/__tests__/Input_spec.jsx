import React from 'react';
import { shallow } from 'enzyme';

import Input from '../sample/Input';

describe('<Input>', () => {
    // 필수 프로퍼티 작성 검사
    it('render widthout crashing', () => {
        expect(() => {
            shallow(<Input name="test_name"/>);
        }).not.toThrow();
    })

    it('has one element', () => {
        const wrapper = shallow(<Input name="test_name"/>);
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toHaveLength(1);
    })

    // find() 함수를 사용해 render() 함수에서 출력해야 하는 항목이 제대로 갖춰져 있는지 검사
    describe('contains <input>', () => {
        it('renders one input', () => {
            const wrapper = shallow(<Input name="test_name"/>);
            expect(wrapper.find('input')).toHaveLength(1);
            expect(wrapper.find('label')).toHaveLength(1);
        })
    })

    // prop(), props() 함수를 사용해 컴포넌트에 전달된 프로퍼티의 값이 의도대로 render() 함수에서 할당되는지 검사
    it('assign the prop value and type', () => {
        const expectedValue = '123';
        const wrapper = shallow(<Input name="test_name" value={expectedValue}/> );
        expect (wrapper.find('input').prop('value')).toBe(expectedValue);
        const { type, value } = wrapper.find('input').props();
        expect(value).toBe(expectedValue);
        expect(type).toBe('text');
    })

    // setProps() 함수로 변경된 프로퍼티값 전달
    it('renders errorMessage', () => {
        const wrapper = shallow(<Input name="test_name"/>);
        expect(wrapper.find('.error')).toHaveLength(0);
        const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
        wrapper.setProps({errorMessage: expectedErrorMessage});
        expect(wrapper.find('span').prop('className')).toBe('error');
        expect(wrapper.find('.error')).toHaveLength(1);
        expect(wrapper.html()).toContain(expectedErrorMessage);
    })

    // simulate() 함수로 가상의 이벤트 검사하기
    it('calls back onChange on input change', () => {
        const changeStub = jest.fn();
        const wrapper = shallow(<Input name="test_name" onChange={changeStub}/>);
        expect(changeStub).not.toHaveBeenCalled();
        const expectedTargetValue = 'updated input';
        wrapper.find('input').simulate('change', { target : {value: expectedTargetValue}});
        expect(changeStub).toHaveBeenCalledTimes(1);
        expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
    })
})