/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Entries from './index';
import { store } from '__mocks__/reduxMock.js';

const component = <Provider store={store}><Entries /></Provider>;

describe('Entries', () => {

})
