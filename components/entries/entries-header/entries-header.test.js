/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import EntriesHeader from './index';
import { store } from '__mocks__/reduxMock.js';

const component = <Provider store={store}><EntriesHeader /></Provider>;

describe('EntriesHeader', () => {

})
