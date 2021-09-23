import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import CircleView from '../../src/components/CircleView';

describe('CircleView', () => {
  it('should match snapshot', async () => {
    const {toJSON} = render(<CircleView bgColor={'#000000'} size={10} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
