import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../sample/Text';
import withHoC from '../sample05/withHoC';
import withLoading from '../sample05/withLoading';

const TextWithHoC = withHoC(Text);
const TextWithLoading = withLoading('로딩 중')(Text);

storiesOf('withLoading', module).addWithJSX('기본 설정', () => (
    <div>
        <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
))
.addWithJSX('large 예제', () => (
    <div>
        <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
))
.addWithJSX('isLoading 예제', () => (
    <div>
        <TextWithLoading isLoading>안녕하세요</TextWithLoading>
    </div>
))