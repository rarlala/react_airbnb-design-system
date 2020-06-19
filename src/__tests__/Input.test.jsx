import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../sample/Input';

describe('<Input>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Input name="name"/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});