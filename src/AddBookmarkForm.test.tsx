import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';

import AddBookmarkForm from './AddBookmarkForm';

describe('<AddBookmarkForm />', () => {
  let onAdd: jest.Mock;
  let wrapper: ReactWrapper;

  beforeEach(() => {
    onAdd = jest.fn();
    wrapper = mount(<AddBookmarkForm onAdd={onAdd} />);
  });

  it('calls onAdd when the submit button is clicked', () => {
    wrapper.find('input[type="submit"]').simulate('click');
    expect(onAdd).toHaveBeenCalled();
  });

  describe('calling onAdd with a bookmark', () => {
    it('includes the name', () => {
      const name = 'Bookmark name';
      const input = wrapper.find('input[name="name"]').getDOMNode() as HTMLInputElement;
      input.value = name;
      wrapper.find('input[type="submit"]').simulate('click');
      expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    it('includes the URL', () => {
      const url = 'http://example.com';
      const input = wrapper.find('input[name="url"]').getDOMNode() as HTMLInputElement;
      input.value = url;
      wrapper.find('input[type="submit"]').simulate('click');
      expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({ url }));
    });

    it('includes the tags as an array split on commas', () => {
      const input = wrapper.find('input[name="tags"]').getDOMNode() as HTMLInputElement;
      input.value = 'foo,bar,baz';
      wrapper.find('input[type="submit"]').simulate('click');
      expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({ tags: ['foo', 'bar', 'baz'] }));
    });

    it('strips whitespace from tag names', () => {
      const input = wrapper.find('input[name="tags"]').getDOMNode() as HTMLInputElement;
      input.value = 'foo, bar, baz';
      wrapper.find('input[type="submit"]').simulate('click');
      expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({ tags: ['foo', 'bar', 'baz'] }));
    });
  });
});
