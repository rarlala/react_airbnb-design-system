import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../sample/InputWithStyle';

storiesOf('inputWithStyle', module)
    .addWithJSX('기본설정', () => <Input name="name"/>)
    .addWithJSX('label 예제', () => <Input name="name" label="이름"/>)
    .addWithJSX('value 예제', () => <Input name="name" label="이름" value="샘플"/>)
    .addWithJSX('value 예제', () => <Input name="name" label="이름" errorMessage="이름을 입력해주세요"/>);