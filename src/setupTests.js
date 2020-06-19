import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

// 아프로디테의 DOM 함수 호출 과정을 중지시킨다.
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({adapter: new Adapter()});

afterEach(() => {
    console.error.mockClear();
})

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation((e) => {
        throw new Error(e);
    })
})