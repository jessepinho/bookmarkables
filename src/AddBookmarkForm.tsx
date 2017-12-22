import * as React from 'react';
import { Bookmark } from './schema';

interface Props {
  onAdd(bookmark: Bookmark): void;
}

const AddBookmarkForm = ({ onAdd }: Props) => {
  let nameInput: HTMLInputElement | null = null;
  let tagsInput: HTMLInputElement | null = null;
  let urlInput: HTMLInputElement | null = null;

  const handleClick = () => {
    if (nameInput && tagsInput && urlInput) {
      const tags = tagsInput.value.split(',').map(tag => tag.trim());
      onAdd({ name: nameInput.value, url: urlInput.value, tags });
    }
  };

  return (
    <React.Fragment>
      <label>URL: <input type="text" name="url" ref={el => urlInput = el} /></label>
      <label>Name: <input type="text" name="name" ref={el => nameInput = el} /></label>
      <label>Tags (comma-separated): <input type="text" name="tags" ref={el => tagsInput = el} /></label>
      <input type="submit" value="Save" onClick={handleClick} />
    </React.Fragment>
  );
};

export default AddBookmarkForm;
