import * as React from 'react';
import { shallow } from 'enzyme';

import AddBookmarkForm from './AddBookmarkForm';

describe('<AddBookmarkForm />', () => {
  it('calls onAdd when the submit button is clicked', () => {
    const onAdd = jest.fn();
    const wrapper = shallow(<AddBookmarkForm onAdd={onAdd} />);
    wrapper.find('input[type="submit"]').simulate('click');

    expect(onAdd).toHaveBeenCalled();
  });
});
